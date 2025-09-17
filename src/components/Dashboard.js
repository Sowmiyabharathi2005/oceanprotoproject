import React from 'react'; 
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaClipboardList, FaMapMarkedAlt, FaFileAlt, FaSignOutAlt, FaChartLine } from 'react-icons/fa';
import './Dashboard.css';

function Dashboard() {
    const cards = [
        { title: 'View Alerts', link: '/alerts', icon: <FaExclamationTriangle />, color: '#ff4d4d', count: 12 },
        { title: 'View Decisions', link: '/decisions', icon: <FaClipboardList />, color: '#00cc44', count: 5 },
        { title: 'View Reports', link: '/reports', icon: <FaFileAlt />, color: '#0077b6', count: 8 },
        { title: 'View Map', link: '/map', icon: <FaMapMarkedAlt />, color: '#00bfff' },
        { title: 'Predictions', link: '/predictions', icon: <FaChartLine />, color: '#ffaa00' },
        { title: 'Logout', link: '/', icon: <FaSignOutAlt />, color: '#666666' }  // Moved here
    ];

    return (
        <div className="dashboard-container">
            <h1>OceanPro Dashboard</h1>
            <p>Welcome! Select an option below:</p>

            <div className="card-grid">
                {cards.map((card, index) => (
                    <Link to={card.link} className="dashboard-card" key={index} style={{ backgroundColor: card.color }}>
                        <div className="card-icon">{card.icon}</div>
                        <div className="card-title">{card.title}</div>
                        {card.count && <span className="card-badge">{card.count}</span>}
                    </Link>
                ))}
            </div>

            {/* Fishes */}
            <img src="/fish1.png" className="fish fish1" alt="fish" />
            <img src="/fish2.png" className="fish fish2" alt="fish" />
            <img src="/fish3.png" className="fish fish3" alt="fish" />

            {/* Bubbles */}
            <div className="bubble bubble1"></div>
            <div className="bubble bubble2"></div>
            <div className="bubble bubble3"></div>
            <div className="bubble bubble4"></div>
            <div className="bubble bubble5"></div>
        </div>
    );
}

export default Dashboard;
