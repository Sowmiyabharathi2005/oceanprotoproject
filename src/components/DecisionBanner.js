import React from 'react';
import './DecisionBanner.css';

function DecisionBanner({ reportCount }) {
    let message = 'All is Normal';

    if (reportCount >= 5 && reportCount < 10) {
        message = 'Monitor Conditions Closely';
    } else if (reportCount >= 10) {
        message = 'Critical Alert: Immediate Evacuation Recommended!';
    }

    return (
        <div className="decision-banner">
            📊 Decision: {message}
        </div>
    );
}

export default DecisionBanner;
