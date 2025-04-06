// Authentication hook

// This hook checks if the user is authenticated by checking for a token in local storage

// File: frontend/src/hooks/useAuth.js
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};

export default useAuth;