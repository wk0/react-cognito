import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import { state } from 'aws-cognito-redux-saga';

class PrivateRoute extends React.Component {
  render() {
    const { auth } = this.props;

    return (
      <Route
        render={() => (auth.isSignedIn !== state.AUTH_FAIL ? (
          <this.props.component />
          ) : (
            <Redirect to="/landing" />
          ))}
      />
    );
  }
}

PrivateRoute.propTypes = {
  auth: PropTypes.object,
};

export default PrivateRoute;
