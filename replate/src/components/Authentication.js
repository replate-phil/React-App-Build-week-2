import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, errCode, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token') && errCode !== 403) {
          return <Component />;
        } else {
          
          console.log('redirecting!!!');
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const mapStateToProps = state => ({
  errCode: state.errCode
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PrivateRoute)
);