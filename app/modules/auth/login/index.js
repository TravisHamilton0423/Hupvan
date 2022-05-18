import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { reduxForm } from 'redux-form';
import {
  loginRequest,
} from '../redux/actions';
import '../styles.css';
import LastFooter from '../../app/components/LastFooter';
import Link from 'react-router-dom/Link';

const LoginPage = (props) => {
  let email, password;
  const logIn = () => {
    console.log(email.value, password.value)
    props.loginRequest({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <div className="modal-view">
      <div className="main-content">
        <Link className="close-icon" to="/">&times;</Link>

        <div className="logo-wrapper">
          <Link className="navbar-brand logo-link" to="/">Hup<span>van</span></Link>
        </div>

        <div className="modal-wrapper ">
          <div className="modal-inner">
            <form className="hupvan-form user-signin">
              <div className="text-center mb-6">
                <img src="/assets/img/profile.png" alt="User avataIcon" />
              </div>

              <div className="mb-4">
                <input type="email" className="form-control" ref={(input)=>{email=input}} placeholder="Email" required />
              </div>
              <div className="mb-4">
                <input type="password" className="form-control" ref={(input)=>{password=input}} placeholder="Password" required />
              </div>

              <div className="text-right mt-3">
                <Link to="forgot-password"><strong>Forgot your password?</strong></Link>
              </div>

              <div className="text-center login-actions">
                <input type="button" className="btn btn-round-primary d-block w-100" onClick={()=>{logIn()}} value="Login" />
                <Link to="signup-driver" className="d-block mt-5">Sign up to drive</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <LastFooter />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
  loginRequest,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  reduxForm({
    form: 'loginForm',
    enableReinitialize: true,
  }))(LoginPage);
