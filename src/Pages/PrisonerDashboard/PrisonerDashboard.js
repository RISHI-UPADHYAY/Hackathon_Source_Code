import React from 'react';
import './PrisonerDashboard.css';
import hearingImg from '../../Assets/online_hearing.webp'
import legalAidImg from '../../Assets/LegalAidimg.webp'
import documentImg from '../../Assets/documents_img.jpg'
import messageImg from '../../Assets/message_img.jpeg'
import caseImg from '../../Assets/case_update.jpg'
import bailImg from '../../Assets/bail_status.jpg'

function PrisonerDashboard() {
    return (
        <div className="prisoner-dashboard">
            <header className="dashboard-header">
                <h2>Welcome, Shlok Singh</h2>
                <p>Here's a quick overview of your current status and upcoming activities.</p>
            </header>

            <div className="dashboard-icons">
                <div className="dashboard-icon">
                    <img src={bailImg} alt="Apply for Bail" />
                    <p>Apply for bail</p>
                </div>
                <div className="dashboard-icon">
                    <img src={documentImg} alt="Documents" />
                    <p>Documents</p>
                </div>
                <div className="dashboard-icon">
                    <img src={hearingImg} alt="Hearings" />
                    <p>Hearings</p>
                </div>
                <div className="dashboard-icon">
                    <img src={messageImg} alt="Messages" />
                    <p>Messages</p>
                </div>
            </div>

            <section className="case-progress">
                <h3>Your Case Progress</h3>
                <div className="progress-bar">
                    <div className="progress" style={{ width: '70%' }}></div>
                </div>
                <p>Your case is 70% complete.</p>
            </section>

            <section className="dashboard-section">
                <h3>Upcoming Hearings</h3>
                <div className="dashboard-card">
                    <img src={hearingImg} alt="Hearing" />
                    <div>
                        <p>Hearing on 25th August 2024</p>
                        <p>Time: 10:00 AM</p>
                    </div>
                    <button>View</button>
                </div>
            </section>

            <section className="dashboard-section">
                <h3>Legal Aid</h3>
                <div className="dashboard-card">
                    <img src={legalAidImg} alt="Legal Aid" />
                    <div>
                        <p>Current Legal Aid Status: Active</p>
                        <p>Assigned Lawyer: Jane Smith</p>
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
                <h3>Messages</h3>
                <div className="dashboard-card">
                    <img src={messageImg} alt="Message" />
                    <div>
                        <p>New Message: Strategy for Next Hearing</p>
                        <p>Date: 19th August 2024</p>
                    </div>
                    <button>View</button>
                </div>
            </section>

            <section className="dashboard-section">
                <h3>Documents</h3>
                <div className="dashboard-card">
                    <img src={documentImg} alt="Document" />
                    <div>
                        <p>Uploaded Document: Case File.pdf</p>
                        <p>Uploaded on: 18th August 2024</p>
                    </div>
                    <button>View</button>
                </div>
            </section>
        </div>
    );
}

export default PrisonerDashboard;