// File: src/pages/LandingPage.js

import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center p-5 shadow rounded bg-white">
        <h1 className="mb-4 fw-bold text-success">
          ♻️ Smart Waste Pickup & Tracking System
        </h1>
        <p className="mb-4 text-muted">
          Select your role to continue
        </p>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <button
            className="btn btn-success btn-lg px-4"
            onClick={() => navigate("/login")}
          >
            👤 User Login
          </button>
          <button
            className="btn btn-dark btn-lg px-4"
            onClick={() => navigate("/dashboard")}
          >
            🚰️ Admin Panel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
// This code defines a simple landing page for a web application using React.