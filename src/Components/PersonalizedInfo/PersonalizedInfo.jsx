import { useState } from "react";
import "./PersonalizedInfo.css"; // Import the Vanilla CSS file

function PersonalizedInfo() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    age: 30,
    caseNumber: "12345",
    offenseType: "Non-Violent",
    bailStatus: "Under Review",
    nextHearing: "2024-12-15",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="info-panel">
      <h2 className="info-panel-title">Personalized Information</h2>
      <div className="info-panel-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={userInfo.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Case Number</label>
          <input
            type="text"
            name="caseNumber"
            value={userInfo.caseNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Offense Type</label>
          <input
            type="text"
            name="offenseType"
            value={userInfo.offenseType}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Bail Status</label>
          <input
            type="text"
            name="bailStatus"
            value={userInfo.bailStatus}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Next Hearing</label>
          <input
            type="date"
            name="nextHearing"
            value={userInfo.nextHearing}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalizedInfo;
