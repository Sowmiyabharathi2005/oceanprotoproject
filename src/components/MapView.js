import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

function MapView() {
    const position = [19.0760, 72.8777]; // Example: Mumbai coordinates

    return (
        <div className="map-container">
            <h1>Interactive Ocean Hazard Map</h1>
            
            <MapContainer center={position} zoom={5} className="leaflet-container">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={position}>
                    <Popup>
                        Example hazard report location
                    </Popup>
                </Marker>
            </MapContainer>

            <Link to="/dashboard" className="btn">Back to Dashboard</Link>
        </div>
    );
}

export default MapView;
