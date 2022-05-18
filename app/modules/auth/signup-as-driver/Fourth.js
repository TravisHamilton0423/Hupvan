import React from 'react';
import ProgressBar from './component/progressbar/ProgressBar'
import LastFooter from '../../app/components/LastFooter'
import DocumentItem from './component/DocumentItem';
import history from 'browserHistory'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Link from 'react-router-dom/Link';

import {
    signupRequest,
} from '../redux/actions'

const Fourth = (props) => {
    const onNext = () => {
        history.push('/signup/as-driver/final')
        props.signupRequest({
            ...props.requestData,
            role: 'driver',
        })
    }
    return (
        <div className="modal-view">
            <div className="main-content">
                <Link className="close-icon" to="/">&times;</Link>
                <div className="logo-wrapper">
                    <Link className="navbar-brand logo-link" to="/">Hup<span>van</span></Link>
                </div>
            </div>
            <div className="modal-wrapper big">
                <div className="modal-inner">
                    <form className="hupvan-form user-signin">
                        <div className="text-center mb-6">
                            <ProgressBar current_index={3} />
                            <img src="/assets/img/info-docs.png" alt="User avataIcon" />
                            <div style={{ marginTop: '0.8rem', color: '#31AA45' }}>Required Documents</div>
                            <div className="bottom-gray-line"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <DocumentItem title="PROFILE PICTURE" text="Your picture must have a clear white background." />
                                <DocumentItem title="DVLA DRIVING LICENSE" text="Upload the front part of your plastic driving license." data={['License number','Expiry Date']} />
                                <DocumentItem title="INSURANCE CERTIFICATE" text="Upload a current certificate & supporting documents." data={['Cert number','Expiry Date']} />
                            </div>
                            <div className="col-sm-6">
                                <DocumentItem title="MOT TEST CERTIFICATE" text="Upload a clear private hire vehicle license." data={['Test number','Expiry Date']} />
                                <DocumentItem title="VS5 VEHICLE LOG BOOK" text="Upload a copy of your logbook & supporting docs." data={['Serial number','Expiry Date']} />
                                <DocumentItem title="UTILITY BILL" text="Upload a current utility bill dated last 3 months." />
                            </div>
                        </div>
                        <div className="text-center login-actions" style={{ marginTop: '4rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <input type="button" className="btn btn-round-primary d-block w-60" value="Next" onClick={()=>onNext()} />
                            </div>
                            <div className="d-block mt-5" style={{ fontSize: '1.5rem' }}>
                                <Link to='/signup/as-driver/third' style={{ color: 'inherit' }}>{'<'}&nbsp;&nbsp;&nbsp;{'Back'}</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <LastFooter />
        </div>
    );
};

const mapStateToProps = (store) => ({
    requestData: store.auth.signupData,
});

const mapDispatchToProps = {
    signupRequest,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
)(Fourth))