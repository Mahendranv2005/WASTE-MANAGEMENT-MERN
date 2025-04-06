// File: frontend/src/pages/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Smart Waste Pickup</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src="/images/about-us.jpg"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p>
            The Smart Waste Pickup and Tracking System is an innovative solution designed to
            improve waste management in urban and rural areas. Our platform allows users to
            schedule garbage pickups, track garbage trucks in real-time, and receive notifications
            about their pickup schedules. It also provides admin features like pickup assignment,
            route optimization, and detailed analytics.
          </p>
          <p>
            Our mission is to create a cleaner, more efficient environment through smart technology.
            By integrating real-time data, user interaction, and automation, we aim to simplify and
            optimize the waste management process for both citizens and municipalities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
//           <Route path="/admin/reports" element={<Reports />} />