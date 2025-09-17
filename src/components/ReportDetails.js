import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Form.css';

function ReportDetails() {
    const { id } = useParams();

    return (
        <div className="form-container">
            <h2>Hazard Report Details</h2>
            <p><strong>Report ID:</strong> {id}</p>
            <p><strong>Hazard Type:</strong> Tsunami</p>
            <p><strong>Description:</strong> High waves observed near coast.</p>
            <p><strong>Media:</strong></p>
            <img src="/sample-media.jpg" alt="Hazard Media" style={{ maxWidth: '100%' }} />

            <Link to="/dashboard" className="btn">Back to Dashboard</Link>
        </div>
    );
}

export default ReportDetails;
