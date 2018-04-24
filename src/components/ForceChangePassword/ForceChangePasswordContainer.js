import { connect } from 'react-redux';

import { reducer } from 'aws-cognito-redux-saga';

import ForceChangePasswordComponent from './ForceChangePassword';

const mapStatetoProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  init: () => {
    dispatch(reducer.init());
  },
  completeNewPassword: (username, password) => {
    dispatch(reducer.completeNewPassword(username, password));
  },
});

export default connect(mapStatetoProps, mapDispatchToProps)(ForceChangePasswordComponent);
