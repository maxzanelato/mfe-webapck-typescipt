import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

const PrivateRoute: React.FC<any> = ({ children }) => {
  let location = useLocation();
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
