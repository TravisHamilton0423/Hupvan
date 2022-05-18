import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    setPassword,
} from '../../auth/redux/actions'

const SetPassword = (props) => {
    const saveChanges = () => {
        let current_password = $('#current_password').val()
        let password = $('#password').val(), confirm_password = $('#confirm_password').val()
        if(password !== confirm_password){
            alert('Passwords are not equal!')
            return
        }
        props.setPassword({
            current_password,
            password,
        })
    }
    return (
        <div>
            <div className="title">Password</div>
            <div className="splitter" />
            <div className="main-content">
                <div className="gap-1"></div><div className="gap-1"></div><div className="gap-1"></div>
                <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">Current password:</div>
                    <div className="col-sm-9"><input type="password" id="current_password" className="form-control" /></div>
                    <div className="gap-1"></div>
                    <div className="col-sm-3 d-flex align-items-center">New password:</div>
                    <div className="col-sm-9"><input type="password" id="password" className="form-control" /></div>
                    <div className="gap-1"></div>
                    <div className="col-sm-3 d-flex align-items-center">Confirm password:</div>
                    <div className="col-sm-9"><input type="password" id="confirm_password" className="form-control" /></div>
                    <div className="gap-1"></div><div className="gap-1"></div><div className="gap-1"></div>
                    <div className="col-sm-4"></div>
                    <div className="col-sm-8 padding-right-2">
                        <input type="button" className="btn btn-round-primary w-100 font-size-1-5-and-padding" value="Save changes"
                            onClick={() => saveChanges()} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (store) => ({
    currentUser: store.auth.currentUser,
});

const mapDispatchToProps = {
    setPassword,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(SetPassword))