import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user, isAdmin }) => {
  if (!user) {
    return <Navigate to="/" />;
  }

  if (isAdmin && !user.isAdmin) {
    return <Navigate to="/profile" />;
  }

  return children;
};

export default ProtectedRoute;
