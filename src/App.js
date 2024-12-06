import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import PrisonerDashboard from './Pages/PrisonerDashboard/PrisonerDashboard';
import LegalAidDashboard from './Pages/LegalAidDashboard/LegalAidDashboard';
import LegalAidForm from './Pages/LegalAidRequestForm/LegalAidForm';
import JudicialDashboard from './Pages/JudicialDashboard/JudicialDashboard';
import OnlineHearingPlatform from './Components/OnlineHearingPlatform/OnlineHearingPlatform';
import CourtSchedule from './Pages/OnlineHearingPlatform/CourtSchedule';
import Login from './Pages/OnlineHearingPlatform/Login';
import BailEligibilityPage from './Components/BailEligibilityPage/BailEligibilityPage';
import ProBonoCase from './Pages/ProBonoCaseFinder/ProBonoCase';


const App = () => {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prisoner-dashboard" element={<PrisonerDashboard />} />
          <Route path='/legal-aid-dashboard' element={<LegalAidDashboard />} />
          <Route path='/legal-aid-form' element={<LegalAidForm />} />
          <Route path='/bail-eligibilty-page' element={<BailEligibilityPage />} />
          <Route path='/judicial-dashboard' element={<JudicialDashboard />} />
          <Route path='/online-hearing-platform' element={<OnlineHearingPlatform />} />
          <Route path='/schedule' element={<CourtSchedule />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pro-bono-case-finder' element={<ProBonoCase/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
