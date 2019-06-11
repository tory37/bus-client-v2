import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

const Dashboard = ({ auth }) => {
  const onLogoutClick = (e) => {
    e.preventDefault();
    logoutUser();
  };

  const user = auth;

  return (
    <div style={{ height: '75vh' }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <div>
            <b>Hey there,</b>
            {' '}
            {user.name.split(' ')[0]}
            <p className="flow-text grey-text text-darken-1">
              You are logged into a full-stack
              {' '}
              <span style={{ fontFamily: 'monospace' }}>MERN</span>
              {' '}
              app 👏
            </p>
          </div>
          <button
            style={{
              width: '150px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
              marginTop: '1rem',
            }}
            onClick={onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(
  mapStateToProps,
  { logoutUser },
)(Dashboard);
