function PredictionCard({ breed, confidence }) {

    if (!breed) {
        return (
            <div className="prediction-card empty-card">
                <h2>Prediction</h2>
                <div className="empty-icon">🐄</div>
                <p>
                    Upload a cattle image and click
                    <strong> Predict Breed </strong>
                    to see the result.
                </p>
            </div>
        );
    }

    return (
        <div className="prediction-card">
            <h2>Prediction Result</h2>
            <div className="breed-name">
                🐄 {breed}
            </div>
            <div className="confidence-section">
                <div className="confidence-header">
                    <span>Confidence</span>
                    <span>{confidence}%</span>
                </div>
                <div className="progress">
                    <div
                        className="progress-fill"
                        style={{
                            width: `${confidence}%`
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default PredictionCard;