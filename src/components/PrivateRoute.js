// import React from 'react';
// import { connect } from 'react-redux';

// const PrivateRoute = ({
//   component: Component, auth, path, ...rest
// }) => {
//   if (auth.isAuthenticated && path !== '/app/login') {
//     // If the user is not logged in, redirect to the login page.
//     navigate('/login');
//     return null;
//   }

//   return <Component {...rest} />;
// };

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired,
//   path: PropTypes.string.isRequred,
//   component: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps)(PrivateRoute);
