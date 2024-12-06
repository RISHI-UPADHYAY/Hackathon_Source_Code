import React from 'react';
//import './CaseCard.css';  // Optional CSS for styling the case card

const CaseCard = ({ caseData }) => {
    return (
        <div className="case-card">
            <h3>{caseData.title}</h3>
            <p><strong>Location:</strong> {caseData.location}</p>
            <p><strong>Case Type:</strong> {caseData.caseType}</p>
            <p><strong>Urgency:</strong> {caseData.urgency}</p>
            <p>{caseData.description}</p>
        </div>
    );
};

export default CaseCard;
