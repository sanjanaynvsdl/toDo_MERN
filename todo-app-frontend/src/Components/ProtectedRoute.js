// src/Components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('token'); // Check if a token exists

  return token ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
