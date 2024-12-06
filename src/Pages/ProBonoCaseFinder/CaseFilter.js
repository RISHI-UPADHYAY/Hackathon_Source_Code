import React, { useState } from 'react';
//import './CaseFilter.css'; // Optional CSS for the filter component

const CaseFilter = ({ onFilter }) => {
    const [caseType, setCaseType] = useState('');
    const [location, setLocation] = useState('');
    const [urgency, setUrgency] = useState('');

    const handleFilter = () => {
        const filterData = { caseType, location, urgency };
        onFilter(filterData);  // Pass the filter criteria to the parent
    };

    return (
        <div className="case-filter">
            <select value={caseType} onChange={(e) => setCaseType(e.target.value)}>
                <option value="">All Case Types</option>
                <option value="criminal">Criminal</option>
                <option value="civil">Civil</option>
                <option value="family">Family Law</option>
                <option value="immigration">Immigration</option>
            </select>

            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />

            <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                <option value="">All Urgency Levels</option>
                <option value="high">High Urgency</option>
                <option value="medium">Medium Urgency</option>
                <option value="low">Low Urgency</option>
            </select>

            <button onClick={handleFilter}>Apply Filters</button>
        </div>
    );
};

export default CaseFilter;
