import { connect } from 'react-redux';

import PrivateRouteComponent from './PrivateRoute';

const mapStatetoProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStatetoProps, mapDispatchToProps)(PrivateRouteComponent);
