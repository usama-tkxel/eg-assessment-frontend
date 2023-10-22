import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from 'src/pages/not-found/not-found';
import Login from 'src/pages/login';
import Signup from 'src/pages/signup';

import { LOGIN, PAGE_NOT_FOUND, SIGNUP } from 'src/constants/routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='*' exact strict element={<NotFound />} />
      <Route path={PAGE_NOT_FOUND} exact element={<NotFound />} />
      <Route path={SIGNUP} element={<Signup />} />
      <Route path={LOGIN} element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
