import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import { state } from 'aws-cognito-redux-saga';

const PrivateRoute = ({ auth }) => (
  <Route
    render={() => (auth.isSignedIn !== state.AUTH_FAIL ? (
      <this.props.component />
      ) : (
        <Redirect to="/landing" />
      ))}
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default PrivateRoute;
