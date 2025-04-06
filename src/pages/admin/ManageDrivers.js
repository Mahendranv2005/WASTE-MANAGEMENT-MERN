// File: FrontEnd/src/admin/ManageDrivers.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageDrivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [newDriver, setNewDriver] = useState({ name: "", phone: "" });

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get("/admin/drivers", config);
      setDrivers(res.data);
    } catch (err) {
      console.error("Error fetching drivers:", err);
    }
  };

  const handleChange = (e) => {
    setNewDriver({ ...newDriver, [e.target.name]: e.target.value });
  };

  const addDriver = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.post("/admin/drivers", newDriver, config);
      alert("Driver added successfully ✅");
      setNewDriver({ name: "", phone: "" });
      fetchDrivers();
    } catch (err) {
      console.error("Error adding driver:", err);
      alert("Failed to add driver ❌");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🚚 Manage Drivers</h2>

      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-info text-white">
          <h5 className="mb-0">➕ Add New Driver</h5>
        </div>
        <div className="card-body">
          <form onSubmit={addDriver}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={newDriver.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter driver name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                value={newDriver.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter phone number"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Add Driver
            </button>
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">👷 Existing Drivers</h5>
        </div>
        <div className="card-body">
          {drivers.length > 0 ? (
            <ul className="list-group">
              {drivers.map((driver, idx) => (
                <li key={idx} className="list-group-item">
                  {driver.name} - {driver.phone}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No drivers found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageDrivers;