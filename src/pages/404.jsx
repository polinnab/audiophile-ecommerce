import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from 'resources/routes/routes';

function Page404() {
  return (
    <>
      <h1>404</h1>
      <br />
      Page not found
      <br /> Go to <Link to={ROUTES.main_route}>Homepage</Link>
    </>
  );
}

export default Page404;
