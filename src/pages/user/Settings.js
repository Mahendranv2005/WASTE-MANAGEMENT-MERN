// File: frontend/src/user/Setting.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Setting = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '', address: '' });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setMessage('❌ Failed to fetch user data.');
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put('/api/user/update', user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('✅ Profile updated successfully!');
    } catch (error) {
      setMessage('❌ Failed to update profile.');
    }
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-info text-white text-center">
              <h4 className="mb-0">⚙️ Account Settings</h4>
            </div>
            <div className="card-body">
              {message && <div className="alert alert-info">{message}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    value={user.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea
                    name="address"
                    id="address"
                    className="form-control"
                    value={user.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Update Profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
