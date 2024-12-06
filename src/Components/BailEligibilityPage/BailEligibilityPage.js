import React, { useState } from 'react';
import BailEligibilityForm from '../../Pages/BailEligibilityForm/BailEligibilityForm';

import './BailEligibilityPage.css'; 

const BailEligibilityPage = () => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    };

    return (
        <div className="bail-eligibility-page">
            <h1>Check Bail Eligibility</h1>
            <p>
                Welcome to the bail eligibility checker. Here, you can find out whether a prisoner might be eligible for bail
                by entering the required details.
            </p>
            {!showForm && (
                <button className="btn-show-form" onClick={handleShowForm}>
                    Fill Out Form to Check Eligibility
                </button>
            )}

            {showForm && <BailEligibilityForm />}
        </div>
    );
};

export default BailEligibilityPage;