import React from 'react';
import { Link } from 'react-router-dom';
import './Alerts.css';

function Alerts() {
    const alerts = [
        "High Wave Alert in Mumbai – Evacuation Recommended",
        "Tsunami Watch near Andaman Coast",
        "Storm Surge Alert in Chennai"
    ];

    return (
        <div className="alerts-container">
            <h1>Ocean Hazard Alerts</h1>

            <ul>
                {alerts.map((alert, index) => (
                    <li key={index} className="alert-item">⚠️ {alert}</li>
                ))}
            </ul>

            <Link to="/dashboard" className="btn">Back to Dashboard</Link>
        </div>
    );
}

export default Alerts;
