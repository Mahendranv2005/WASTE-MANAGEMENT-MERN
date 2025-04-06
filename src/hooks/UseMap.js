// Google Maps hook

// File: frontend/src/hooks/useMap.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useMap = () => {
  const [truckLocation, setTruckLocation] = useState([12.9716, 77.5946]);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await axios.get('/api/truck-location');
        setTruckLocation([res.data.lat, res.data.lng]);
      } catch (err) {
        console.error('Failed to fetch truck location:', err);
      }
    };

    const interval = setInterval(fetchLocation, 5000);
    return () => clearInterval(interval);
  }, []);

  return truckLocation;
};

export default useMap;
// This hook fetches the truck's location every 5 seconds and returns the coordinates.