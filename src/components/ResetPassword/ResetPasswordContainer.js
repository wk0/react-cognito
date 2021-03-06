import { connect } from 'react-redux';

import { reducer } from 'aws-cognito-redux-saga';

import ResetPasswordComponent from './ResetPassword';

const mapStatetoProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  init: () => {
    dispatch(reducer.init());
  },
  forgotPassword: (username) => {
    dispatch(reducer.forgotPassword(username));
  },
});

export default connect(mapStatetoProps, mapDispatchToProps)(ResetPasswordComponent);
