import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Form.css';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // For prototype, we assume login is always successful
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
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit" className="btn">Login</button>
                    </form>
                    <Link to="/" className="btn">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
