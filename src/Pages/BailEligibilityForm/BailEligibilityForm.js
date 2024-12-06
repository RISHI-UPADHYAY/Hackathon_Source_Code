import React, { useState } from 'react';
import './BailEligibilityForm.css';

const BailEligibilityForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        address: '',
        phoneNumber: '',
        criminalCharges: '',
        chargesNature: [],
        priorConvictions: '',
        priorConvictionsDetails: '',
        onProbation: '',
        outstandingWarrants: '',
        stableResidence: '',
        residenceDuration: '',
        communityTies: '',
        employmentStatus: '',
        employerDetails: '',
        financialMeans: '',
        dangerToCommunity: '',
        historyOfViolence: '',
        courtOrderViolations: '',
        additionalInfo: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked
                    ? [...formData[name], value]
                    : formData[name].filter((item) => item !== value),
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <form className="bail-eligibility-form" onSubmit={handleSubmit}>
            <h2>Bail Eligibility Questionnaire</h2>

            <label>
                Full Name:
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </label>

            <label>
                Date of Birth:
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </label>

            <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </label>

            <label>
                Phone Number:
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </label>

            <label>
                Are you currently facing criminal charges?
                <div>
                    <label>
                        <input type="radio" name="criminalCharges" value="Yes" checked={formData.criminalCharges === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="criminalCharges" value="No" checked={formData.criminalCharges === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            <label>
                What is the nature of the charges against you? (Check all that apply)
                <div>
                    <label>
                        <input type="checkbox" name="chargesNature" value="Misdemeanor" checked={formData.chargesNature.includes('Misdemeanor')} onChange={handleChange} /> Misdemeanor
                    </label>
                    <label>
                        <input type="checkbox" name="chargesNature" value="Felony" checked={formData.chargesNature.includes('Felony')} onChange={handleChange} /> Felony
                    </label>
                    <label>
                        <input type="checkbox" name="chargesNature" value="Violent Crime" checked={formData.chargesNature.includes('Violent Crime')} onChange={handleChange} /> Violent Crime
                    </label>
                    <label>
                        <input type="checkbox" name="chargesNature" value="Non-violent Crime" checked={formData.chargesNature.includes('Non-violent Crime')} onChange={handleChange} /> Non-violent Crime
                    </label>
                    <label>
                        <input type="checkbox" name="chargesNature" value="Drug-related Offense" checked={formData.chargesNature.includes('Drug-related Offense')} onChange={handleChange} /> Drug-related Offense
                    </label>
                    <label>
                        <input type="checkbox" name="chargesNature" value="Property-related Offense" checked={formData.chargesNature.includes('Property-related Offense')} onChange={handleChange} /> Property-related Offense
                    </label>
                    <label>
                        <input type="checkbox" name="chargesNature" value="Other" checked={formData.chargesNature.includes('Other')} onChange={handleChange} /> Other
                    </label>
                </div>
            </label>

            <label>
                Do you have any prior criminal convictions?
                <div>
                    <label>
                        <input type="radio" name="priorConvictions" value="Yes" checked={formData.priorConvictions === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="priorConvictions" value="No" checked={formData.priorConvictions === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            {formData.priorConvictions === 'Yes' && (
                <label>
                    If yes, please specify the type and number of convictions:
                    <textarea name="priorConvictionsDetails" value={formData.priorConvictionsDetails} onChange={handleChange} required />
                </label>
            )}

            <label>
                Are you currently on probation or parole?
                <div>
                    <label>
                        <input type="radio" name="onProbation" value="Yes" checked={formData.onProbation === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="onProbation" value="No" checked={formData.onProbation === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            <label>
                Do you have any outstanding warrants or pending cases?
                <div>
                    <label>
                        <input type="radio" name="outstandingWarrants" value="Yes" checked={formData.outstandingWarrants === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="outstandingWarrants" value="No" checked={formData.outstandingWarrants === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            <label>
                Do you have a stable residence?
                <div>
                    <label>
                        <input type="radio" name="stableResidence" value="Yes" checked={formData.stableResidence === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="stableResidence" value="No" checked={formData.stableResidence === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            <label>
                How long have you lived at your current address?
                <select name="residenceDuration" value={formData.residenceDuration} onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option value="Less than 6 months">Less than 6 months</option>
                    <option value="6 months to 1 year">6 months to 1 year</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="More than 3 years">More than 3 years</option>
                </select>
            </label>

            <label>
                Do you have strong ties to the community?
                <div>
                    <label>
                        <input type="radio" name="communityTies" value="Yes" checked={formData.communityTies === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="communityTies" value="No" checked={formData.communityTies === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            {formData.communityTies === 'Yes' && (
                <label>
                    If yes, please describe (e.g., family, employment, etc.):
                    <textarea name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} required />
                </label>
            )}

            <label>
                Are you employed?
                <div>
                    <label>
                        <input type="radio" name="employmentStatus" value="Yes" checked={formData.employmentStatus === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="No" checked={formData.employmentStatus === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            {formData.employmentStatus === 'Yes' && (
                <label>
                    If yes, please provide the name and address of your employer:
                    <textarea name="employerDetails" value={formData.employerDetails} onChange={handleChange} required />
                </label>
            )}

            <label>
                Do you have the means to financially secure bail if set?
                <div>
                    <label>
                        <input type="radio" name="financialMeans" value="Yes" checked={formData.financialMeans === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="financialMeans" value="No" checked={formData.financialMeans === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            <label>
                Do you pose a danger to the community if released?
                <div>
                    <label>
                        <input type="radio" name="dangerToCommunity" value="Yes" checked={formData.dangerToCommunity === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="dangerToCommunity" value="No" checked={formData.dangerToCommunity === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            <label>
                Do you have a history of violence?
                <div>
                    <label>
                        <input type="radio" name="historyOfViolence" value="Yes" checked={formData.historyOfViolence === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="historyOfViolence" value="No" checked={formData.historyOfViolence === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            <label>
                Have you ever violated a court order, including bail conditions?
                <div>
                    <label>
                        <input type="radio" name="courtOrderViolations" value="Yes" checked={formData.courtOrderViolations === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="courtOrderViolations" value="No" checked={formData.courtOrderViolations === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            <label>
                Is there any additional information that should be considered in determining your bail eligibility?
                <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
            </label>

            <button type="submit">Submit</button>
        </form>
    );
};

export default BailEligibilityForm;