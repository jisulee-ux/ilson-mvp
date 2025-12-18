import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MVPPlatform from './pages/MVPPlatform';
import EmployerDashboard from './pages/EmployerDashboard';
import KakaoNotification from './pages/KakaoNotification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/platform" element={<MVPPlatform />} />
        <Route path="/dashboard" element={<EmployerDashboard />} />
        <Route path="/kakao" element={<KakaoNotification />} />
      </Routes>
    </Router>
  );
}

export default App;
