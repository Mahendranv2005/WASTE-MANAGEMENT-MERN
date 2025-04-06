// Home page

// Files: frontend/src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container text-center mt-5">
    <h1 className="display-4 fw-bold">🚛 Smart Waste Pickup & Tracking System</h1>
    <p className="lead text-muted">
      Schedule waste collection, track garbage trucks in real-time, and stay updated with notifications.
    </p>
    <div className="row mt-5">
      <div className="col-md-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Schedule Waste Pickup</h5>
            <p className="card-text">Book a pickup at your convenience with a few clicks.</p>
            <Link to="/schedule" className="btn btn-primary w-100">Schedule Now</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Track Garbage Truck</h5>
            <p className="card-text">View live location of garbage trucks in your area.</p>
            <Link to="/track" className="btn btn-secondary w-100">Track Now</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Admin Dashboard</h5>
            <p className="card-text">Manage pickups, assign routes, and monitor performance.</p>
            <Link to="/dashboard" className="btn btn-info w-100">Go to Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

// This code defines a simple home page for a web application using React.
// It includes a title, a brief description, and two buttons that link to the schedule and tracking pages. 
