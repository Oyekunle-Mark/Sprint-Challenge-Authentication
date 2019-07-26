import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { string, func } from 'prop-types';

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

WithAuth.propTypes = {
  component: func.isRequired,
  path: string.isRequired,
};

export default WithAuth;
