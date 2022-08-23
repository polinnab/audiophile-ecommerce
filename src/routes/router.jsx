import React from 'react';
import Page404 from 'pages/404';
import {Routes, Route, Navigate} from 'react-router-dom';
import {ROUTES} from 'resources/routes/routes';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.main_route} />} exact />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Router;
