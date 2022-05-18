import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    profileUpdate,
} from '../../auth/redux/actions'

const SetSettings = (props) => {
    const [name, setName] = useState(props.currentUser.profile.name)
    const [email, setEmail] = useState(props.currentUser.email)
    const [phone, setPhone] = useState(props.currentUser.profile.phone_number)
    const saveChanges = () => {
        let data = {}
        if (name) data['name'] = name
        if (email) data['email'] = email
        if (phone) data['phone_number'] = phone
        props.profileUpdate(data)
    }
    return (
        <div>
            <div className="title">Settings</div>
            <div className="splitter" />
            <div className="main-content">
                <div className="color-text heading">Personal details</div>
                <div className="row">
                    {props.currentUser.profile.name &&
                        <React.Fragment>
                            <div className="col-sm-3 d-flex align-items-center">Name:</div>
                            <div className="col-sm-9"><input className="form-control" value={name} onChange={(e) => setName(e.target.value)} /></div>
                            <div className="gap-1"></div>
                        </React.Fragment>
                    }
                    {props.currentUser.email &&
                        <React.Fragment>
                            <div className="col-sm-3 d-flex align-items-center">Email:</div>
                            <div className="col-sm-9"><input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                            <div className="gap-1"></div>
                        </React.Fragment>
                    }
                    {props.currentUser.profile.phone_number &&
                        <React.Fragment>
                            <div className="col-sm-3 d-flex align-items-center">Phone:</div>
                            <div className="col-sm-9"><input className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
                            <div className="gap-1"></div>
                        </React.Fragment>
                    }
                </div>
                <div className="color-text heading">Payment information</div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card-container">
                            <img src="/assets/img/circle_group.png" />
                            &nbsp; ···· &nbsp;4567
                                <div className="float-right phone-button">
                                <span>Edit</span>&nbsp;&nbsp;&nbsp;
                                    <span>Remove</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 align-center">
                        <div className="not-phone-button">
                            <span>Edit</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>Remove</span>
                        </div>
                    </div>
                    <div className="gap-1"></div>
                    <div className="col-sm-6">
                        <div className="card-container">
                            <img src="/assets/img/visa.png" />
                            &nbsp; ···· &nbsp;4567
                                <div className="float-right phone-button">
                                <span>Edit</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>Remove</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="gap-1"></div><div className="gap-1"></div>
                        <div className="add-new-card align-center">
                            +Add new card
                            </div>
                    </div>
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
    profileUpdate,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(SetSettings))