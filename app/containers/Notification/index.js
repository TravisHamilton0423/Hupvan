import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { setGlobalNotification, initGlobalNotification } from 'containers/App/redux/actions';
import { makeSelectNotification } from 'containers/App/redux/selectors';
import toast from './toastr';
import './toastr.css';

class Notification extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      fixedStyle: false,
      should: true
    };
  }
  componentWillMount() {
    toast.options = {
      closeButton: true,
      debug: false,
      positionClass: 'toast-bottom-right',
      onclick: null,
      showDuration: '1000',
      hideDuration: '1000',
      timeOut: '5000',
      extendedTimeOut: '1000',
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut'
    };
  }

  render() {
    const { notification, initNotification } = this.props;
    const type = notification.type;
    if (!notification.visible) {
      return null;
    }

    const msg = notification.message;
    if (msg != 'Unexpected token < in JSON at position 0') { toast[type](msg); }
    return (
      <div>{setTimeout(() => initNotification(), 10) && false}</div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  notification: makeSelectNotification,
});

const mapDispatchToProps = {
  setNotification: setGlobalNotification,
  initNotification: initGlobalNotification
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Notification);
