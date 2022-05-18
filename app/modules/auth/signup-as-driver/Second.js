import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import ProgressBar from './component/progressbar/ProgressBar'
import LastFooter from '../../app/components/LastFooter'
import DoubleRowInput from './component/DoubleRowInput';
import DoubleRowSelect from './component/DoubleRowSelect';
import history from 'browserHistory'
import Link from 'react-router-dom/Link';

import {
    forSignupDataSet,
} from '../redux/actions'

const Second = (props) => {
    const onNext = () => {
        let date_of_birth, national_insurance_number, ethnicity, disability, gender, street_name, current_address, country, city, post_code;
        date_of_birth = $('#Date_of_Birth').val()
        national_insurance_number = $('#National_Insurance_Number').val()
        ethnicity = $('#Ethnicity').val()
        disability = $('#Disability').val()
        gender = $('#Gender').val()
        street_name = $('#Street_name').val()
        current_address = $('#Current_address').val()
        country = $('#Country').val()
        city = $('#City').val()
        post_code = $('#Post_code').val()
        props.forSignupDataSet({
            date_of_birth,
            national_insurance_number,
            ethnicity,
            disability,
            gender,
            street_name,
            current_address,
            country,
            city,
            post_code,
        })
        history.push('/signup/as-driver/third')
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
                            <ProgressBar current_index={1} />
                            <img src="/assets/img/info-personal.png" alt="User avataIcon" />
                            <div style={{ marginTop: '0.8rem', color: '#31AA45' }}>Personal Information</div>
                            <div className="bottom-gray-line"></div>
                        </div>
                        <div className="row" style={{marginTop: '-2rem'}}>
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '1.5rem' }}>
                                <DoubleRowInput type="date" name="Date of Birth" margin="1rem" />
                            </div>
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '1.5rem' }}>
                                <DoubleRowInput type="text" name="National Insurance Number" placeholder="Enter Insurance Number" margin="1rem" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '1.5rem' }}>
                                <DoubleRowSelect name="Ethnicity" margin="1.2rem" data={['Native', 'Hispanic', 'Asian', 'European', 'American']} />
                            </div>
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '1.5rem' }}>
                                <DoubleRowSelect name="Disability" margin="1.2rem" data={['---', 'Arm', 'Leg', 'Head']} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '1.5rem' }}>
                                <DoubleRowSelect name="Gender" margin="1.2rem" data={['Male', 'Female']} />
                            </div>
                        </div>
                        <div style={{ marginLeft: '0.5rem', marginTop: '0.8rem', color: '#31AA45' }}>Address Information</div>
                        <div className="bottom-gray-line" style={{ marginTop: '0.5rem', width: '100%', marginLeft: '0rem' }}></div>
                        <div className="row" style={{marginTop: '-1.5rem'}}>
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '1.5rem' }}>
                                <DoubleRowInput type="text" name="Street name" margin="1rem" placeholder="Hour no & street name" />
                            </div>
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '1.5rem' }}>
                                <DoubleRowInput type="text" name="Current address" placeholder="Enter address" margin="1rem" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '1.5rem' }}>
                                <DoubleRowSelect name="Country" margin="1.2rem" data={['---','Australia','America','Beligium','China','Denmark','England','France','Germany','Holand','Island','Japan','Korea','Mongolia','Norway']} />
                            </div>
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '1.5rem' }}>
                                <DoubleRowSelect name="City" margin="1.2rem" data={['---','Manchester','Oxford','Madrid','Paris','Pyongyang','Beijing','Moscow','Tokyo','London']} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '1.5rem' }}>
                                <DoubleRowInput name="Post code" margin="1.2rem" placeholder="Enter post code" />
                            </div>
                        </div>
                        <div className="text-center" style={{ marginTop: '4rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <input type="button" className="btn btn-round-primary d-block w-60" onClick={()=>onNext()} value="Next" />
                            </div>
                            <div className="d-block mt-5" style={{ fontSize: '1.5rem' }}>
                                <Link to='/signup/as-driver/first' style={{ color: 'inherit' }}>{'<'}&nbsp;&nbsp;&nbsp;{'Back'}</Link>
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
    forSignupDataSet,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
)(Second))