// File: FrontEnd/src/admin/Settings.js
import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [form, setForm] = useState({ siteName: '', contactEmail: '', notificationEnabled: true });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.post('/admin/settings', form, config);
      alert('Settings updated successfully!');
    } catch (err) {
      console.error('Error updating settings:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">⚙️ Admin Settings</h2>
      <form className="card shadow p-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Site Name</label>
          <input
            type="text"
            className="form-control"
            name="siteName"
            value={form.siteName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contact Email</label>
          <input
            type="email"
            className="form-control"
            name="contactEmail"
            value={form.contactEmail}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-check form-switch mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            name="notificationEnabled"
            checked={form.notificationEnabled}
            onChange={handleChange}
            id="notificationSwitch"
          />
          <label className="form-check-label" htmlFor="notificationSwitch">
            Enable Notifications
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
