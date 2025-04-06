// File: frontend/src/pages/Features.js
import React from 'react';

const Features = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Key Features</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Schedule Pickups</h5>
              <p className="card-text">Easily schedule waste pickups at your convenience using our intuitive scheduling system.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Real-Time Tracking</h5>
              <p className="card-text">Track garbage trucks live on a map and stay updated on their arrival time.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Notifications</h5>
              <p className="card-text">Receive SMS and email alerts for scheduled pickups, updates, and confirmations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
// This code defines a React functional component called "Features".
// It displays a section of a webpage showcasing key features of a service.