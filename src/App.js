import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Alerts from './components/Alerts';
import Decisions from './components/Decisions';
import ReportHazard from './components/ReportHazard';
import ReportDetails from './components/ReportDetails';
import MapView from './components/MapView';
import Predictions from './components/Predictions';  // Import Predictions component

// Global CSS
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                {/* Landing & Auth */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Dashboard & Features */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/decisions" element={<Decisions />} />
                <Route path="/reports" element={<ReportHazard />} />
                <Route path="/report/:id" element={<ReportDetails />} />
                <Route path="/map" element={<MapView />} />
                <Route path="/predictions" element={<Predictions />} />  {/* New Prediction Route */}
            </Routes>
        </Router>
    );
}

export default App;
