import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import reducer from './redux/reducers'
import saga from './redux/saga'
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import './styles.scss';
import Home from './home';
import Driver from './driver';
import Header from './components/Header';
import Footer from './components/Footer';
import Partner from './partner';
import Book from './book';
import Profile from './profile';

class AppModule extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let full_path = window.location.pathname, current_url;
    if (full_path.indexOf('/driver') !== -1)
      current_url = 'as-driver'
    else if(full_path.indexOf('/partner') !== -1)
      current_url = 'as-partner'
    else
      current_url = 'as-customer'
    return (
      <div>
        <Header current_url={current_url} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/driver" component={Driver} />
          <Route path="/partner" component={Partner} />
          <Route path="/profile" component={Profile} />
          <Route path="/book" component={Book} />
          <Route render={()=><Redirect to="/" />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'app', reducer })
const withSaga = injectSaga({ key: 'app', saga })

export default withRouter(compose(
  withReducer,
  withSaga,
  withConnect,
)(AppModule));
