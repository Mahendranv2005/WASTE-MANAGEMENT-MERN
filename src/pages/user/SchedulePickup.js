// Waste pickup form

// File: frontend/src/user/SchedulePickup.js
import React, { useState } from 'react';
import { schedulePickup } from '../../api/WasteApi';

const SchedulePickup = () => {
  const [form, setForm] = useState({ address: '', date: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await schedulePickup(form, token);
      alert('✅ Pickup Scheduled Successfully!');
      setForm({ address: '', date: '' });
    } catch (error) {
      alert('❌ Failed to schedule pickup. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h4 className="mb-0">📅 Schedule a Waste Pickup</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-control"
                    placeholder="Enter your address"
                    value={form.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Pickup Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    🗑️ Schedule Pickup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePickup;