import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from 'src/pages/not-found/not-found';
import Login from 'src/pages/login';
import Signup from 'src/pages/signup';
import Home from 'src/pages/home';

import { HOME, LOGIN, PAGE_NOT_FOUND, SIGNUP } from 'src/constants/routes';
import checkAuth from 'src/components/hoc/auth';

const AppRoutes = () => {
  const AuthenticatedHome = checkAuth(Home);

  return (
    <Routes>
      {/* <Route path='*' exact strict element={<NotFound />} /> */}
      <Route path={PAGE_NOT_FOUND} exact element={<NotFound />} />
      <Route path={SIGNUP} exact element={<Signup />} />
      <Route path={LOGIN} exact element={<Login />} />
      <Route path={HOME} exact element={<AuthenticatedHome />} />
    </Routes>
  );
};

export default AppRoutes;
