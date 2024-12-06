import React from 'react';

const HearingContent = ({ caseDetails }) => {
    if (!caseDetails) {
        return <p>Loading...</p>;  // To handle any case where details aren't loaded yet
    }

    return (
        <div className="hearing-content">
            <h2>Hearing for Case #{caseDetails.caseNumber}</h2>
            <p>Case Title: {caseDetails.title}</p>
            <p>Date: {caseDetails.date}</p>
            <p>Time: {caseDetails.time}</p>

            <div className="hearing-video">
                <h3>Live Hearing Stream</h3>
                <iframe
                    width="560"
                    height="315"
                    src={caseDetails.videoStreamURL}
                    title="Court Hearing"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <div className="hearing-notes">
                <h3>Case Details & Notes</h3>
                <p>{caseDetails.notes}</p>
            </div>
        </div>
    );
};

export default HearingContent;