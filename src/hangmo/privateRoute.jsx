import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';

function PrivateRoute({ element, ...rest }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken === null || authToken === 'false') {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate, location.pathname]); // Use location.pathname instead of window.location.pathname

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Replace this with your actual loading spinner or placeholder component
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Route {...rest} element={element} />;
}

export default PrivateRoute;