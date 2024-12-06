import React from 'react';

const CaseManagement = () => {
    return (
        <div className="case-management">
            <h2>Case Management</h2>
            <div className="case-statistics">
                <p>Active Cases: 350</p>
                <p>Upcoming Hearings: 45</p>
                <p>Case Backlog: 120</p>
                <p>Average Time to Disposition: 180 days</p>
            </div>
        </div>
    );
};

export default CaseManagement;