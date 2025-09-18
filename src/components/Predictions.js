import React from 'react';
import { Link } from 'react-router-dom';
import './Predictions.css';

function Predictions() {
    // Dummy prediction data
    const predictions = {
        weather: '🌊 Heavy rain with high waves expected near Mumbai coast.',
        chemicalHazard: '🧪 Low risk of chemical contamination in the ocean near Chennai.',
        temperature: '🌡️ Sea surface temperature: 30°C',
        windSpeed: '💨 Wind Speed: 45 km/h from southwest',
    };

    return (
        <div className="predictions-container">
            <h1>AquaNova Predictions</h1>

            <div className="prediction-card">
                <h2>Weather Prediction</h2>
                <p>{predictions.weather}</p>
            </div>

            <div className="prediction-card">
                <h2>Chemical Hazard Prediction</h2>
                <p>{predictions.chemicalHazard}</p>
            </div>

            <div className="prediction-card">
                <h2>Sea Temperature</h2>
                <p>{predictions.temperature}</p>
            </div>

            <div className="prediction-card">
                <h2>Wind Speed</h2>
                <p>{predictions.windSpeed}</p>
            </div>

            <Link to="/dashboard" className="btn">Back to Dashboard</Link>
        </div>
    );
}

export default Predictions;
