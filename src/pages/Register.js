// File: frontend/src/pages/RegisterPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!nameRegex.test(name)) {
      alert("Full Name must be at least 3 characters long and contain only letters & spaces. ❌");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address! ❌");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits! ❌");
      return false;
    }
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 6 characters long, include at least one uppercase letter, one lowercase letter, and one number. ❌");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match! ❌");
      return false;
    }

    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await axios.post("/auth/register", { name, email, phone, address, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(res.data.msg);
      console.log("Registered successfully ✅");

      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      alert(err.response?.data?.msg || "Registration Failed ❌");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "450px" }}>
        <h3 className="text-center mb-3">📝 Register</h3>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea className="form-control" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
        <p className="mt-3 text-center">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
// This code defines a registration page for a web application using React.