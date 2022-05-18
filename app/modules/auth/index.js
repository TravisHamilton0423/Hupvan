import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Notification from 'containers/Notification';
import LoginPage from './login';
import LoginByNumber from './login-by-verify-number';
import LoginByVerifyNumberFinal from './login-by-verify-number/Final';
import SignupAsDriver from './signup-as-driver';
import First from './signup-as-driver/First';
import Second from './signup-as-driver/Second';
import Third from './signup-as-driver/Third';
import Fourth from './signup-as-driver/Fourth';
import DriverFinal from './signup-as-driver/Final'
import SignupAsPartner from './signup-as-partner'
import HupvanAccount from './hupvan-account';
import SignUpAsCustomer from './signup-as-customer';

class Auth extends Component {
  render() {
    return (
      <div className="auth-app">
        <Notification className="auth-notification" />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/login/by-verify-number" component={LoginByNumber} />
          <Route exact path="/login/by-verify-number/final" component={LoginByVerifyNumberFinal} />

          <Route exact path="/signup/as-customer" component={SignUpAsCustomer} />
          <Route exact path="/signup/as-partner" component={SignupAsPartner} />
          <Route exact path="/signup/as-partner/second" component={HupvanAccount} />
          <Route exact path="/signup/as-driver" component={SignupAsDriver} />
          <Route exact path="/signup/as-driver/first" component={First} />
          <Route exact path="/signup/as-driver/second" component={Second} />
          <Route exact path="/signup/as-driver/third" component={Third} />
          <Route exact path="/signup/as-driver/fourth" component={Fourth} />
          <Route exact path="/signup/as-driver/final" component={DriverFinal} />
          <Route render={() => <Redirect to="/login" />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Auth);
