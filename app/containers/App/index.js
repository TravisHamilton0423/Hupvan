import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import AuthModule from 'modules/auth';
import Notification from 'containers/Notification';
import AppModule from 'modules/app';
import reducer from 'modules/auth/redux/reducers';
import saga from 'modules/auth/redux/saga';
import { makeSelectCurrentUser, makeSelectPersistLoaded, makeSelectCurrentTime } from './redux/selectors';
import { getCurrentTimeRequest, logout } from 'modules/auth/redux/actions'
import moment from 'moment';
import Redirect from 'react-router-dom/Redirect';


function checkToken(currentUser, currentTime) {
  const exp = currentUser.exp
  return moment(currentTime).diff(exp) < 86400
}

class RootApp extends Component {
  componentWillMount() {
    this.props.getCurrentTimeRequest()
  }

  isAuthenticated = () => {
    const { currentUser, currentTime } = this.props
    return currentUser && checkToken(currentUser, currentTime)
  }

  renderApp = () => {
    // if (!this.isAuthenticated()) return <AuthModule />

    return <AppModule />
  }

  render() {
    const { persistLoaded } = this.props;
    if (!persistLoaded) {
      return null;
    }

    return (
      <div className="app">
        <Notification className="notification" />
        <Helmet
          titleTemplate="%s - Hupvan"
          defaultTitle="Hupvan"
        >
          <meta name="description" content="Hupvan" />
        </Helmet>

        <Switch>
          <Route path='/login' component={AuthModule} />
          <Route path='/signup' component={AuthModule} />
          <Route path="/" component={AppModule} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser,
  persistLoaded: makeSelectPersistLoaded,
  currentTime: makeSelectCurrentTime,
});

const mapDispatchToProps = {
  getCurrentTimeRequest,
  logout,
};

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
  withReducer,
  withSaga,
  withConnect
)(RootApp));
