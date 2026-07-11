import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";

function UploadSection({
  setBreed,
  setConfidence,
  setBreedDetails,
}) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));

    setBreed("");
    setConfidence("");
    setBreedDetails(null);
  };

  const handlePredict = async () => {

    if (!image) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {

      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setBreed(response.data.breed);
      setConfidence(response.data.confidence);

      setBreedDetails(response.data.details || null);

    } 
    catch (error) {
      console.log(error);
      alert("Prediction failed.");

    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-card">
      <h2>Upload Image</h2>
      <div className="preview-box">
        {preview ? (
          <img src={preview} alt="preview" />
        ) : (
          <p>No Image Selected</p>
        )}

      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />
      <button onClick={handlePredict}>
        Predict Breed
      </button>
      {loading && <Loader />}
    </div>
  );
}

export default UploadSection;