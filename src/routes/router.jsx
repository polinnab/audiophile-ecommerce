import React from 'react';
import Page404 from 'pages/404';
import {Routes, Route} from 'react-router-dom';
import HomePage from 'pages/Home';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Router;
