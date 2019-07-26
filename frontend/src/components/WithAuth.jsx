import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const WithAuth = ({ path, component: Component }) => (
  <Route
    path={path}
    render={props =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default WithAuth;
