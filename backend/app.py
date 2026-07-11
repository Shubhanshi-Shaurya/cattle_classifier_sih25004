from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
from tensorflow.keras.applications.resnet50 import preprocess_input
import json
import requests
import os
from breed_info import BREED_INFO

app = Flask(__name__)
CORS(app)


model = tf.keras.models.load_model("model/cattle_classifier.keras")


with open("classes.txt", "r") as f:
    class_names = [line.strip() for line in f]


def get_wikipedia_info(breed_name):
    search_names = [
        f"{breed_name.replace('_',' ')} cattle",
        f"{breed_name.replace('_',' ')} buffalo",
        breed_name.replace("_"," ")
    ]

    for name in search_names:
        url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{name.replace(' ','_')}"

        try:
            response = requests.get(url, timeout=5)
            if response.status_code == 200:
                data = response.json()
                return {
                    "summary": data.get("extract", ""),
                    "image": data.get("thumbnail", {}).get("source", ""),
                    "wiki": data.get("content_urls", {})
                                .get("desktop", {})
                                .get("page", "")
                }

        except Exception:
            pass

    return {

        "summary": "",
        "image": "",
        "wiki": ""
    }


def predict(image):

    image = image.convert("RGB")
    image = image.resize((224,224))
    img = np.array(image, dtype=np.float32)
    img = np.expand_dims(img, axis=0)

    predictions = model.predict(img, verbose=0)[0]

    class_index = np.argmax(predictions)

    predicted_breed = class_names[class_index]
    confidence = float(predictions[class_index])

    # print("Predictions:", predictions)
    # print("Sum:", np.sum(predictions))
    # print("Max:", np.max(predictions))
    # print("Predicted:", class_names[np.argmax(predictions)])

    return predicted_breed, confidence


@app.route("/predict", methods=["POST"])
def predict_api():

    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files["image"]
    image = Image.open(file)

    predicted_breed, confidence = predict(image)
    local_info = BREED_INFO.get(predicted_breed, {})
    wiki_info = get_wikipedia_info(predicted_breed)

    return jsonify({
        "breed": predicted_breed,
        "confidence": round(confidence * 100, 2),
        "details": {
            "origin":
                local_info.get("origin", "Not Available"),
            "purpose":
                local_info.get("purpose", "Not Available"),
            "milkYield":
                local_info.get("milkYield", "Not Available"),
            "color":
                local_info.get("color", "Not Available"),
            "description":
                local_info.get(
                    "description",
                    wiki_info["summary"]
                ),
            "wikiSummary":
                wiki_info["summary"],
            "image":
                wiki_info["image"],
            "wikipedia":
                wiki_info["wiki"]
        }
    })


if __name__ == "__main__":
    app.run(debug=True)