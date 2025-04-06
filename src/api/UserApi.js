// API calls for authentication

// File: FrontEnd/src/api/userApi.js
import axios from "axios"; 

const API = `${process.env.REACT_APP_API_BASE}/api/users`;

export const registerUser = async (userData) => {
  try {
    const res = await axios.post('http://localhost:5000/api/register', userData);
    return res.data;
  } catch (error) {
    console.error('Register error:', error.response?.data || error.message);
    return { error: error.response?.data?.message || "Registration failed" };
  }
};

export const loginUser = async (data) => {
  const res = await fetch(`${API}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
};