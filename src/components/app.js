import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OAuthLogin from './oauth'; // Rename GoogleAuth to OAuthLogin for clarity
import MainApp from '../main'; // Assuming this is your main app component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" component={OAuthLogin} />
                <Route path="/main-app" component={MainApp} />
            </Routes>
        </Router>
    );
}

export default App;
