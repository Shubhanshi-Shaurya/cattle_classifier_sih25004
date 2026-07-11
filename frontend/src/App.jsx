import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import UploadSection from "./components/UploadSection";
import PredictionCard from "./components/PredictionCard";
import BreedInfo from "./components/BreedInfo";

function App() {

  const [breed, setBreed] = useState("");
  const [confidence, setConfidence] = useState("");
  const [breedDetails, setBreedDetails] = useState(null);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <UploadSection
          setBreed={setBreed}
          setConfidence={setConfidence}
          setBreedDetails={setBreedDetails}
        />
        <div className="right-panel">
          <PredictionCard
            breed={breed}
            confidence={confidence}
          />
          <BreedInfo
            details={breedDetails}
          />
        </div>
      </div>
    </>
  );
}

export default App;