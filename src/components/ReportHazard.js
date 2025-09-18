import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

function ReportHazard() {
    const [hazardType, setHazardType] = useState('');
    const [showCustomInput, setShowCustomInput] = useState(false);

    const handleHazardChange = (e) => {
        const selected = e.target.value;
        setHazardType(selected);
        setShowCustomInput(selected === 'Other');
    };

    return (
        <div className="form-container">
            <h2>Report Ocean Hazard</h2>
            <form>
                <label>Hazard Type:</label>
                <select value={hazardType} onChange={handleHazardChange} required>
                    <option value="">-- Select Hazard Type --</option>
                    <option value="Tsunami">Tsunami</option>
                    <option value="Storm Surge">Storm Surge</option>
                    <option value="High Waves">High Waves</option>
                    <option value="Coastal Flooding">Coastal Flooding</option>
                    <option value="Swell Surges">Swell Surges</option>
                    <option value="Other">Other</option>
                </select>

                {showCustomInput && (
                    <input type="text" placeholder="Enter custom hazard type" required />
                )}

                <label>Description:</label>
                <textarea placeholder="Provide detailed description of the hazard" required></textarea>

                <label>Upload Image/Video:</label>
                <input type="file" accept="image/*,video/*" />

                <button type="submit" className="btn">Submit Report</button>
            </form>

            <Link to="/dashboard" className="btn">Back to Dashboard</Link>
        </div>
    );
}

export default ReportHazard;
