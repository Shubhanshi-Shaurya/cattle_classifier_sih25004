function BreedInfo({ details }) {

    if (!details) {
        return (
            <div className="breed-info empty-card">
                <h2>Breed Information</h2>
                <p>
                    Predict a breed to view its details.
                </p>
            </div>
        );
    }

    return (
        <div className="breed-info">
            <h2>Breed Information</h2>
            {details.image && (
                <img
                    src={details.image}
                    alt="Breed"
                    className="breed-image"
                />
            )}
            <div className="info-grid">
                <div>
                    <strong>Origin</strong>
                    <p>{details.origin}</p>
                </div>
                <div>
                    <strong>Purpose</strong>
                    <p>{details.purpose}</p>
                </div>
                <div>
                    <strong>Milk Yield</strong>
                    <p>{details.milkYield}</p>
                </div>
                <div>
                    <strong>Coat Colour</strong>
                    <p>{details.color}</p>
                </div>
            </div>
            <h3>Description</h3>
            <p>
                {details.description}
            </p>
            {details.wikiSummary && (
                <>
                    <h3>
                        Wikipedia Summary
                    </h3>
                    <p>
                        {details.wikiSummary}
                    </p>
                </>
            )}
            {details.wikipedia && (
                <a
                    href={details.wikipedia}
                    target="_blank"
                    rel="noreferrer"
                    className="wiki-link"
                >
                    Read More →
                </a>
            )}
        </div>
    );
}

export default BreedInfo;