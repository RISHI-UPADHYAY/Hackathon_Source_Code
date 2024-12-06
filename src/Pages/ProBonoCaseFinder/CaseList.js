import React from 'react';
import CaseCard from './CaseCard';
//import './CaseList.css';  // Optional CSS for the case list

const CaseList = ({ cases }) => {
    if (cases.length === 0) {
        return <p>No cases found matching your criteria.</p>;
    }

    return (
        <div className="case-list">
            {cases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseData={caseItem} />
            ))}
        </div>
    );
};

export default CaseList;
