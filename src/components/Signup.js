import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Form.css';

function Signup() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // For prototype, we assume signup is successful
        navigate('/dashboard');
    };

    return (
        <div className="home-container">
            {/* Ocean background video */}
            <video autoPlay muted loop className="bg-video">
                <source src="/ocean-background.mp4" type="video/mp4" />
            </video>

            <div className="overlay">
                <div className="form-container">
                    <h2>Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <input type="password" placeholder="Confirm Password" required />
                        <button type="submit" className="btn">Signup</button>
                    </form>
                    <Link to="/" className="btn">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
