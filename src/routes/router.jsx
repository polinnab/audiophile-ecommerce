import React from 'react';
import Page404 from 'pages/404';
import {Routes, Route, Navigate} from 'react-router-dom';
import {MAIN_ROUTE} from 'routes/_routes';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={MAIN_ROUTE} />} exact />
      <Route path="*" element={<Page404 />} exact />
    </Routes>
  );
}

export default Router;
