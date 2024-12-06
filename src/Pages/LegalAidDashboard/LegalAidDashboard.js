import React from 'react';
import './LegalAidDashboard.css';
import clientImg from '../../Assets/client_image.webp'
import judicialUpdates from '../../Assets/judicial_updates.jpg'
import bailStatus from '../../Assets/bail_status.jpg'
import caseImg from '../../Assets/case_update.jpg'

function LegalAidDashboard() {
    return (
        <div className="legal-aid-dashboard">
            <header className="dashboard-header">
                <h2>Overview</h2>
                <p>Active Cases: 12</p>
                <p>Pending Requests: 5</p>
                <p>Judicial Updates: 3 new</p>
            </header>

            <section className="dashboard-section">
                <h3>Client Requests</h3>
                <div className="dashboard-card">
                    <img src={clientImg} alt="Client Request" />
                    <div>
                        <p>John Doe - Request for Legal Aid</p>
                        <p>Submitted: 25th August 2024</p>
                    </div>
                    <button>View</button>
                </div>
                <div className="dashboard-card">
                    <img src={clientImg} alt="Client Request" />
                    <div>
                        <p>Jane Smith - Request for Bail Review</p>
                        <p>Submitted: 24th August 2024</p>
                    </div>
                    <button>View</button>
                </div>
            </section>

            <section className="dashboard-section">
                <h3>Judicial Updates</h3>
                <div className="dashboard-card">
                    <img src={judicialUpdates} alt="Judicial Update" />
                    <div>
                        <p>Update: New Court Hearing Scheduled</p>
                        <p>Date: 26th August 2024</p>
                    </div>
                    <button>View</button>
                </div>
                <div className="dashboard-card">
                    <img src={judicialUpdates} alt="Judicial Update" />
                    <div>
                        <p>Update: Evidence Submission Deadline Extended</p>
                        <p>Date: 25th August 2024</p>
                    </div>
                    <button>View</button>
                </div>
            </section>

            <section className="dashboard-section">
                <h3>Case Updates</h3>
                <div className="dashboard-card">
                    <img src={caseImg} alt="Case Update" />
                    <div>
                        <p>Case Update: New Evidence Submitted</p>
                        <p>Date: 20th August 2024</p>
                    </div>
                    <button>View</button>
                </div>
            </section>

            <section className="dashboard-section">
                <h3>Bail Status</h3>
                <div className="dashboard-card">
                    <img src={bailStatus} alt="Bail Status" />
                    <div>
                        <p>John Doe - Bail Pending</p>
                        <p>Next Review: 25th August 2024</p>
                    </div>
                    <button>View</button>
                </div>
            </section>

            <footer className="dashboard-footer">
                <p>Legal Aid Dashboard © 2024</p>
                <p>Privacy Policy | Terms of Service | Contact Us</p>
            </footer>
        </div>
    );
}

export default LegalAidDashboard;