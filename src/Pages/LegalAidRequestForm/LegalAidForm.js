import React, { useState } from 'react';
import './LegalAidForm.css';

const LegalAidForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        email: '',
        contactMethod: '',
        legalIssue: '',
        legalIssueDescription: '',
        ongoingCase: '',
        caseNumber: '',
        employmentStatus: '',
        monthlyIncome: '',
        dependents: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <form className="legal-aid-form" onSubmit={handleSubmit}>
            <h2>Legal Aid Request Form</h2>

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

            <div className="form-row">
                <label>
                    City:
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </label>

                <label>
                    State:
                    <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                </label>

                <label>
                    ZIP Code:
                    <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                </label>    
            </div>
                    
            <label>
                Phone Number:
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </label>

            <label>
                Email Address:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>

            <label>
                Preferred Method of Contact:
                <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option value="Phone">Phone</option>
                    <option value="Email">Email</option>
                </select>
            </label>

            <label>
                Type of Legal Issue:
                <select name="legalIssue" value={formData.legalIssue} onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option value="Family Law">Family Law</option>
                    <option value="Criminal Defense">Criminal Defense</option>
                    <option value="Housing">Housing</option>
                    <option value="Immigration">Immigration</option>
                    <option value="Employment Law">Employment Law</option>
                    <option value="Civil Rights">Civil Rights</option>
                    <option value="Other">Other</option>
                </select>
            </label>

            <label>
                Brief Description of Legal Issue:
                <textarea name="legalIssueDescription" value={formData.legalIssueDescription} onChange={handleChange} required />
            </label>

            <label>
                Is there an ongoing court case?
                <div>
                    <label>
                        <input type="radio" name="ongoingCase" value="Yes" checked={formData.ongoingCase === 'Yes'} onChange={handleChange} required /> Yes
                    </label>
                    <label>
                        <input type="radio" name="ongoingCase" value="No" checked={formData.ongoingCase === 'No'} onChange={handleChange} required /> No
                    </label>
                </div>
            </label>

            {formData.ongoingCase === 'Yes' && (
                <label>
                    If yes, please provide the case number:
                    <input type="text" name="caseNumber" value={formData.caseNumber} onChange={handleChange} />
                </label>
            )}

            <label>
                Employment Status:
                <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option value="Employed">Employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Retired">Retired</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                </select>
            </label>

            <label>
                Monthly Income:
                <select name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option value="Below $1,000">Below $1,000</option>
                    <option value="$1,000 - $2,000">$1,000 - $2,000</option>
                    <option value="$2,001 - $3,000">$2,001 - $3,000</option>
                    <option value="$3,001 - $4,000">$3,001 - $4,000</option>
                    <option value="Above $4,000">Above $4,000</option>
                </select>
            </label>

            <label>
                Number of Dependents:
                <input type="number" name="dependents" value={formData.dependents} onChange={handleChange} required />
            </label>

            <label className="consent">
                <input type="checkbox" required /> I hereby declare that the information provided above is true and correct to the best of my knowledge. I understand that providing false information may result in the denial of legal aid.
            </label>

            <button type="submit">Submit</button>
        </form>
    );
};

export default LegalAidForm;