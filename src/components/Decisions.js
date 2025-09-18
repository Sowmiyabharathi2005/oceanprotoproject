import React from 'react';
import { Link } from 'react-router-dom';
import './Decisions.css';

function Decisions() {
    // Example dummy decisions data
    const decisions = [
        "Evacuate low-lying areas in Mumbai due to high waves.",
        "Monitor coastal regions near Chennai for storm surge.",
        "Suspend fishing activities near Andaman & Nicobar Islands.",
    ];

    return (
        <div className="decisions-container">
            <h1>Emergency Decisions</h1>
            <ul>
                {decisions.map((decision, index) => (
                    <li key={index} className="decision-item">{decision}</li>
                ))}
            </ul>
            <Link to="/dashboard" className="btn">Back to Dashboard</Link>
        </div>
    );
}

export default Decisions;
