// File: FrontEnd/src/user/Dashboard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [pickupSchedule, setPickupSchedule] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get("/api/dashboard");
        setPickupSchedule(res.data.pickupSchedule);
        setNotifications(res.data.notifications);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📊 Waste Management Dashboard</h2>

      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">📅 Scheduled Pickups</h4>
        </div>
        <div className="card-body">
          {pickupSchedule.length > 0 ? (
            <ul className="list-group">
              {pickupSchedule.map((schedule, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{schedule.date}</span>
                  <span
                    className={`badge rounded-pill ${schedule.status === "Completed" ? "bg-success" : "bg-warning text-dark"}`}
                  >
                    {schedule.status}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No upcoming pickups</p>
          )}
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-info text-white">
          <h4 className="mb-0">🔔 Notifications</h4>
        </div>
        <div className="card-body">
          {notifications.length > 0 ? (
            <ul className="list-group">
              {notifications.map((note, index) => (
                <li key={index} className="list-group-item">
                  {note.message}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No new notifications</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
