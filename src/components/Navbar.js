// Navigation bar

// File: frontend/src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/landing">SmartWaste</Link>
      <div>
        <Link className="btn btn-outline-light me-2" to="/schedule">Schedule</Link>
        <Link className="btn btn-outline-light me-2" to="/track">Track</Link>
        <Link className="btn btn-outline-light me-2" to="/dashboard">Dashboard</Link>
        <button
          className="btn btn-danger"
          onClick={() => {
            localStorage.clear();
            window.location.href = '/login';
          }}
        >Logout</button>
      </div>
    </div>
  </nav>
);

export default Navbar;


// This code defines a navigation bar component for a web application using React.
// It includes links to the home, schedule, tracking, and dashboard pages.  