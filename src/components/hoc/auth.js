import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthenticationStatus } from 'src/selectors/auth';
import { LOGIN } from 'src/constants/routes';

const checkAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const isAuthenticated = useSelector(getAuthenticationStatus);
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    }
    return <Navigate to={LOGIN} replace />;
  };
  return AuthHOC;
};

export default checkAuth;
