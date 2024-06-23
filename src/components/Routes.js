// src/Routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from '../main';
// import Dashboard from './components/Dashboard';

const clientId = '922998236899-r4ij0st5iqkfb17udpvpacm7id503msl.apps.googleusercontent.com'

const AppRoutes = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default AppRoutes;
