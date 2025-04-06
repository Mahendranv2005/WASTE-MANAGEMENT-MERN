// File: frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/user/Dashboard';
import SchedulePickup from './pages/user/SchedulePickup';
import Tracking from './pages/user/Tracking';
import PickupHistory from './pages/user/PickupHistory';
import Notifications from './pages/user/Notifications';
import Profile from './pages/user/Profile';
import UserSettings from './pages/user/Settings';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManagePickups from './pages/admin/ManagePickups';
import ManageDrivers from './pages/admin/ManageDrivers';
import ManageTrucks from './pages/admin/ManageTrucks';
import UserManagement from './pages/admin/UserManagement';
import RouteOptimization from './pages/admin/RouteOptimization';
import Reports from './pages/admin/Reports';
import AdminSettings from './pages/admin/Settings';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          {/* Landing Page First */}
          <Route path="/" element={<Landing />} />

          {/* Navigate from Landing Page to appropriate auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Public Info Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* User Pages */}
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/schedule" element={<SchedulePickup />} />
          <Route path="/user/tracking" element={<Tracking />} />
          <Route path="/user/history" element={<PickupHistory />} />
          <Route path="/user/notifications" element={<Notifications />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/settings" element={<UserSettings />} />

          {/* Admin Pages */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/pickups" element={<ManagePickups />} />
          <Route path="/admin/drivers" element={<ManageDrivers />} />
          <Route path="/admin/trucks" element={<ManageTrucks />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/routes" element={<RouteOptimization />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          {/* Redirect any unknown routes to landing page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;