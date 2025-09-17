import React from 'react';
import './AlertBanner.css';

function AlertBanner({ message }) {
    return (
        <div className="alert-banner">
            ⚠️ {message}
        </div>
    );
}

export default AlertBanner;
