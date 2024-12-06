import React from 'react';
import './Dashboard.css';
import CaseManagement from './CaseManagement';
import JudgePerformance from './JudgePerformance';
import CourtEfficiency from './CourtEfficiency';
import FinancialInformation from './FinancialInformation';
import PublicAccess from './PublicAccess';

const JudicialDashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Judicial Dashboard</h1>

            <div className="dashboard-section">
                <CaseManagement />
            </div>

            <div className="dashboard-section">
                <JudgePerformance />
            </div>

            <div className="dashboard-section">
                <CourtEfficiency />
            </div>

            <div className="dashboard-section">
                <FinancialInformation />
            </div>

            <div className="dashboard-section">
                <PublicAccess />
            </div>
        </div>
    );
};

export default JudicialDashboard;