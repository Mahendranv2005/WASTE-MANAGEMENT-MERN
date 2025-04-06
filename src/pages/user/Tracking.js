// Real-time waste tracking

// File: frontend/src/user/TrackingPage.js
import React from 'react';
import MapComponent from '../../components/Map';

const TrackingPage = () => (
  <div className="container mt-5">
    <div className="card shadow">
      <div className="card-header bg-success text-white text-center">
        <h4 className="mb-0">🗺️ Real-Time Garbage Truck Tracking</h4>
      </div>
      <div className="card-body">
        <MapComponent />
      </div>
    </div>
  </div>
);

export default TrackingPage;

// This code defines a simple tracking page for a web application using React.
// It imports a MapComponent that presumably displays a map for tracking purposes.