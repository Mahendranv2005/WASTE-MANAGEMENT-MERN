// File: FrontEnd/src/admin/ManagePickups.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ManagePickups = () => {
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    fetchPickups();
  }, []);

  const fetchPickups = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get("/admin/pickups", config);
      setPickups(res.data);
    } catch (err) {
      console.error("Error fetching pickups: ❌", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.put(`/admin/pickups/${id}`, { status }, config);
      fetchPickups();
    } catch (err) {
      console.error("Error updating pickup status:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📦 Manage Pickups</h2>

      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">🗓️ Pickup Requests</h5>
        </div>
        <div className="card-body">
          {pickups.length > 0 ? (
            <ul className="list-group">
              {pickups.map((pickup) => (
                <li key={pickup._id} className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="me-3">
                    <strong>{pickup.address}</strong>
                    <br />
                    {new Date(pickup.date).toLocaleDateString()} -
                    <span className="badge bg-secondary ms-2">{pickup.status}</span>
                  </div>
                  <div>
                    {pickup.status !== "Completed" && (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => updateStatus(pickup._id, "Completed")}
                      >
                        Mark as Completed
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No pickup requests available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagePickups;
