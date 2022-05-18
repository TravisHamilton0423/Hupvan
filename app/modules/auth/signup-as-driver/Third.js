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

const Third = (props) => {
    const onNext = () => {
        let driving_category, category, vehicle_type, vehicle_model, year, seater, colour, license_plate_number;
        driving_category = $('#Driving_category').val()
        category = $('#Category').val()
        vehicle_type = $('#Vehicle_type').val()
        vehicle_model = $('#Vehicle_model').val()
        year = $('#Year').val()
        seater = $('#Seater').val()
        colour = $('#Colour').val()
        license_plate_number = $('#License_plate_number').val()
        props.forSignupDataSet({
            driving_category,
            category,
            vehicle_type,
            vehicle_model,
            year,
            seater,
            colour,
            license_plate_number,
        })
        history.push('/signup/as-driver/fourth')
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
                            <ProgressBar current_index={2} />
                            <img src="/assets/img/info-vehicle.png" alt="User avataIcon" />
                            <div style={{ marginTop: '0.8rem', color: '#31AA45' }}>Vehicle Information</div>
                            <div className="bottom-gray-line"></div>
                        </div>
                        <div className="row" style={{marginTop: '-2rem'}}>
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '2rem' }}>
                                <DoubleRowSelect name="Driving category" data={['Van','Truck','Container']} margin="1.2rem" />
                            </div>
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '2rem' }}>
                                <DoubleRowSelect name="Category" margin="1.2rem" data={['Small','Medium','Large']} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '2rem' }}>
                                <DoubleRowSelect name="Vehicle type" margin="1.2rem" data={['Diesel', 'Petrol', 'Gas', 'Battery']} />
                            </div>
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '2rem' }}>
                                <DoubleRowSelect name="Vehicle model" margin="1.2rem" data={['Bense','Waggon','Lexas','Toyota']} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '2rem' }}>
                                <DoubleRowSelect name="Year" margin="1.2rem" data={['2010','2012','2014','2016','2018','2020']} />
                            </div>
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '2rem' }}>
                                <DoubleRowSelect name="Seater" margin="1.2rem" data={['2','3','4','5','6','7','8']} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '2rem' }}>
                                <DoubleRowSelect name="Colour" margin="1.2rem" data={['Black','White','Yellow','Grey','Pink','Red','Blue','Green','Orange','Brown']} />
                            </div>
                            <div className="col-sm-6" style={{ position: 'relative',marginTop: '2rem' }}>
                                <DoubleRowInput name="License plate number" margin="1rem" placeholder="Enter license plate number" />
                            </div>
                        </div>
                        <div className="text-center login-actions" style={{ marginTop: '4rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <input type="button" className="btn btn-round-primary d-block w-60" value="Next" onClick={()=>onNext()} />
                            </div>
                            <div className="d-block mt-5" style={{ fontSize: '1.5rem' }}>
                                <Link to='/signup/as-driver/second' style={{ color: 'inherit' }}>{'<'}&nbsp;&nbsp;&nbsp;{'Back'}</Link>
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
)(Third))