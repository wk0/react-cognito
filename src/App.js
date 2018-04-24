import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { state } from 'aws-cognito-redux-saga';

import './App.css';
import Landing from './components/Landing';
import Protected from './components/Protected';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import ChangePassword from './components/ChangePassword';
import ForceChangePassword from './components/ForceChangePassword';
import Header from './components/Header';
import Auth from './components/Auth';
import PrivateRoute from './components/PrivateRoute';

const App = ({ auth }) => (

  <Router>
    <div className="app">
      <div className="screen">
        <Auth />
        <Header />
        <Switch>
          <PrivateRoute path="/protected" component={Protected} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/changepassword" component={ChangePassword} />
          <Route
            path="/forcechangepassword"
            component={ForceChangePassword}
          />
          <Route path="/landing" component={Landing} />

          <Route
            path="/"
            render={() => {
              if (auth.isSignedIn === state.AUTH_SUCCESS) {
                return <Redirect to="/protected" />;
              }
              return <Redirect to="/landing" />;
            }}
          />
        </Switch>
      </div>
    </div>
  </Router>
);

App.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default App;
