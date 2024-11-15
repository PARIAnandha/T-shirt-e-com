import React from 'react';
import { Navigate } from 'react-router-dom';

// This function will check if the user is authenticated
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Replace with your actual authentication check logic

  if (!isAuthenticated) {
    return <Navigate to="/home" replace />; // Redirect to login if not authenticated
  }

  return element; // If authenticated, render the passed component
};

export default ProtectedRoute;
