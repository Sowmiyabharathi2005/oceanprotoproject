import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <video autoPlay muted loop className="bg-video">
                <source src="/ocean-background.mp4" type="video/mp4" />
            </video>

            <div className="overlay">
                <img src="/logo.png" alt="Logo" className="logo"/>
                <h1>AquaNova Prototype</h1>
                <p>Report, Monitor, and Stay Informed about Ocean Hazards</p>

                <div className="btn-group">
                    <Link to="/login" className="btn">Login</Link>
                    <Link to="/signup" className="btn">Signup</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
