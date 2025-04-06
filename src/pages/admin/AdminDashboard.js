// File: FrontEnd/src/admin/AdminDashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.get("/admin/dashboard", config);
        setUsers(res.data.users);
        setPickups(res.data.pickups);
      } catch (error) {
        console.error("Failed to fetch admin data ❌", error);
      }
    };
    fetchAdminData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🛠️ Admin Dashboard</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">👥 Registered Users</h5>
            </div>
            <div className="card-body">
              {users.length > 0 ? (
                <ul className="list-group">
                  {users.map((user, index) => (
                    <li key={index} className="list-group-item">
                      {user.name} - {user.email}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">No users registered.</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">🚛 Pickup Requests</h5>
            </div>
            <div className="card-body">
              {pickups.length > 0 ? (
                <ul className="list-group">
                  {pickups.map((pickup, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between">
                      <span>{pickup.date} - {pickup.address}</span>
                      <span className={`badge ${pickup.status === 'Completed' ? 'bg-success' : 'bg-warning text-dark'}`}>{pickup.status}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">No pickup requests.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;