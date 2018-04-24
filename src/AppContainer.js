import { connect } from 'react-redux';

import AppComponent from './App';

const mapStatetoProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStatetoProps, mapDispatchToProps)(AppComponent);
