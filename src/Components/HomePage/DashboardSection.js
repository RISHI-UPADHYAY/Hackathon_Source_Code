import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyImage from '../../Assets/logo.jpg'
import LegalAid from '../../Assets/LegalAidimg.webp'
import JudicialImg from '../../Assets/JudicialDashboardimg.jpeg'
import bailImg from '../../Assets/bail_status.jpg'


function DashboardSection() {

    const navigate = useNavigate();

    const goToPrisonerDashboard = () => {
        navigate('/prisoner-dashboard');
    }

    const goToLegalAidDashboard = () => {
        navigate('/legal-aid-dashboard');
    }

    const goToBailEligibilityPage = () => {
        navigate('/bail-eligibilty-page')
    }

    const goToJudicialDashboard = () =>{
        navigate('/judicial-dashboard');
    }

    return (
        <section className="dashboard-section">
            <div className="dashboard-item">
                <img onClick={goToPrisonerDashboard} src={MyImage} alt="Prisoner Dashboard" />
                <h3>Prisoner Dashboard</h3>
            </div>
            <div className="dashboard-item">
                <img onClick={goToBailEligibilityPage} src={bailImg} alt="Check Bail Eligibility" />
                <h3>Check Bail Eligibility</h3>
            </div>
            <div className="dashboard-item">
                <img src={LegalAid} onClick={goToLegalAidDashboard} alt="Legal Aid Dashboard" />
                <h3>Legal Aid Dashboard</h3>
            </div>
            <div className="dashboard-item">
                <img onClick={goToJudicialDashboard} src={JudicialImg} alt="Judicial Dashboard" />
                <h3>Judicial Dashboard</h3>
            </div>
        </section>
    );
}

export default DashboardSection;