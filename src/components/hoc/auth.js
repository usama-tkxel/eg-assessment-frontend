import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthenticationStatus } from 'src/selectors/auth';

const checkAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const isAuthenticated = useSelector(getAuthenticationStatus);
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }
    return <Navigate to="/login" replace />;
  };
  return AuthHOC;
};

export default checkAuth;
