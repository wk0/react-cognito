import { connect } from 'react-redux';
import ProtectedComponent from './Protected';

const mapStatetoProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStatetoProps, mapDispatchToProps)(ProtectedComponent);
