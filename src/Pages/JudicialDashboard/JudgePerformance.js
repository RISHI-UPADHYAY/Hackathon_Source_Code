import React from 'react';

const JudgePerformance = () => {
    return (
        <div className="judge-performance">
            <h2>Judge Performance Metrics</h2>
            <div className="judge-statistics">
                <p>Caseload Overview</p>
                <ul>
                    <li>Judge A: 150 cases</li>
                    <li>Judge B: 120 cases</li>
                    <li>Judge C: 80 cases</li>
                </ul>
                <p>Disposition Rate: 85%</p>
                <p>Average Time to Disposition: 160 days</p>
            </div>
        </div>
    );
};

export default JudgePerformance;