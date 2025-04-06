// API calls for waste requests

// File: frontend/src/api/wasteApi.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/waste' });

export const schedulePickup = (pickupData, token) => 
  API.post('/schedule', pickupData, { headers: { 'x-auth-token': token } });

export const getPickupRequests = (token) => 
  API.get('/requests', { headers: { 'x-auth-token': token } });