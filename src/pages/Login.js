// Login page component


// This component provides a login form for users to access the application.
// It includes fields for email and password, and uses Bootstrap for styling.
// It uses React hooks for state management and the useNavigate hook from react-router-dom for navigation after login.

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // <-- added Link
import { loginUser } from '../api/UserApi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await loginUser({ email, password });
    if (res.token) {
      localStorage.setItem('token', res.token);
      navigate('/home');
    } else {
      alert('Please check your credentials.');
      console.error('Login failed ❌', res.error);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow w-100" style={{ maxWidth: '400px' }}>
        <h3 className="mb-3 text-center">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid mb-3">
            <button className="btn btn-success">Login</button>
          </div>
        </form>

        {/* ✅ Register link below the form */}
        <div className="text-center">
          <span className="text-muted">Don't have an account? </span>
          <Link to="/register" className="text-primary text-decoration-none">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
