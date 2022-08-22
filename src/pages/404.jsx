import React from 'react';
import {Link} from 'react-router-dom';

function Page404() {
  return (
    <>
      <h1>404</h1>
      <br>Page not found</br>
      <br>
        Go to <Link to="/">Homepage</Link>
      </br>
    </>
  );
}

export default Page404;
