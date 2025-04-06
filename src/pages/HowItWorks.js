// File: frontend/src/pages/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">How It Works</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">1. Schedule a Pickup</h5>
              <p className="card-text">Log in and submit a pickup request by selecting your location and preferred date/time.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">2. Track the Truck</h5>
              <p className="card-text">Use the real-time tracking feature to monitor the truck’s location on the map as it heads your way.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">3. Get Notified</h5>
              <p className="card-text">Receive SMS and email alerts before and after the pickup for a smooth experience.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="text-muted">Experience seamless waste management with just a few clicks!</p>
      </div>
    </div>
  );
};

export default HowItWorks;
