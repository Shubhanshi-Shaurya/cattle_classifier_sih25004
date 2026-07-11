#  Indian Cattle Breed Classification 

## Overview

Addressing the problem statement **25004** of **SIH'25**, this project is a Deep Learning-based web application that identifies Indian cattle and buffalo breeds from an uploaded image. It uses a ResNet50-based image classification model and provides additional breed information such as origin, purpose, milk yield, coat colour, and a Wikipedia summary.

The project consists of a Flask backend for model inference and a React frontend for an interactive user experience.

---

## Problem Statement
- Image based Breed recognition of cattle and buffaloes of India
- Problem Statement - SIH25004
- Theme - Agriculture,FoodTech &Rural Development


---

## Features

* Image upload and preview
* Breed prediction using ResNet50
* Prediction confidence score
* Breed information display
* Wikipedia summary integration
* Responsive React interface
* REST API built with Flask

---

## Tech Stack

### Frontend

* React.js
* Axios
* Vanilla CSS

### Backend

* Flask
* TensorFlow / Keras
* Pillow
* NumPy
* Flask-CORS
* Requests

### Model

* ResNet50 (Transfer Learning)
* Image Classification
* 41 Indian cattle and buffalo breeds

---

## Dataset

The model was trained on the Indian Cattle Breeds dataset available on Kaggle.

Classes include indigenous cattle breeds, buffalo breeds, and selected exotic dairy breeds.


---

## Project Structure

```text
Indian-Cattle-Breed-Classifier/

│
├── backend/
│   ├── app.py
│   ├── breed_info.py
│   ├── classes.txt
│   ├── requirements.txt
│   └── model/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
│
├── README.md
└── .gitignore
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Shubhanshi-Shaurya/cattle_classifier_sih25004

cd cattle_classifier_sih25004
```

---

### Backend

```bash
cd backend

pip install -r requirements.txt

python app.py
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## How to Use

1. Start the Flask backend.
2. Start the React frontend.
3. Upload an image of a cattle or buffalo.
4. Click **Predict Breed**.
5. View the predicted breed, confidence score, and breed information.

---

## Model Information

* Architecture: ResNet50
* Framework: TensorFlow / Keras
* Input Size: 224 × 224
* Number of Classes: 41
* Transfer Learning with ImageNet weights

---


## Future Improvements

* Improve model accuracy through fine-tuning.
* Better handling of class imbalance.
* Display Top-3 predictions.
* Deploy backend and frontend online.
* Mobile-friendly UI.
* More detailed breed information.

---

<!-- ## Screenshots

Add screenshots of:

* Home Page
* Prediction Result
* Breed Information

--- -->


