import React, {Component} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import ProgressBar from './component/progressbar/ProgressBar'
import LastFooter from '../../app/components/LastFooter'
import RadioGroup from './component/RadioGroup';
import SelectGroup from './component/SelectGroup';
import history from '../../../browserHistory'
import Link from 'react-router-dom/Link';

import {
    forSignupDataSet,
} from '../redux/actions'

class First extends Component {
    state = {
        has_license: 'Yes',
        insurance_policy: 'Yes',
        taxi_license: 'Yes',
        own_car: 'Yes',
        proficiency: 'Dialect',
        currently_drive_for_other: '---',
    }
    onChange(name,val) {
        var state = {}
        state[name] = val
        this.setState(state)
    }
    onSubmit() {
        this.props.forSignupDataSet({
            has_license: this.state.has_license,
            insurance_policy: this.state.insurance_policy,
            taxi_license: this.state.taxi_license,
            own_car: this.state.own_car,
            proficiency: this.state.proficiency,
            currently_drive_for_other: this.state.currently_drive_for_other,
        })
        history.push('/signup/as-driver/second')
    }
    render() {
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
                                <ProgressBar current_index={0} />
                                <img src="/assets/img/info-general.png" alt="User avataIcon" />
                                <div style={{marginTop:'0.8rem',color:'#31AA45'}}>General Information</div>
                                <div className="bottom-gray-line"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <RadioGroup data={['Yes','No']} title={'Do you have a valid driver license?'} name={'has_license'} 
                                        nowsel={this.state.has_license} onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="col-sm-6">
                                    <SelectGroup data={['Dialect','Fluent','Native']} title={'What is your proficiency in English?'} name={'proficiency'} 
                                        nowsel={this.state.proficiency} onChange={this.onChange.bind(this)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <RadioGroup data={['Yes','No']} title={'Do you have a valid insurance policy?'} name={'insurance_policy'} 
                                        nowsel={this.state.insurance_policy} onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="col-sm-6">
                                    <RadioGroup data={['Yes','No']} title={'Do you own your own car?'} name={'own_car'} 
                                        nowsel={this.state.own_car} onChange={this.onChange.bind(this)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <RadioGroup data={['Yes','No']} title={'Do you have a valid Taxi or Cab license issued by your city?'} name={'taxi_license'} 
                                        nowsel={this.state.taxi_license} onChange={this.onChange.bind(this)} />
                                </div>
                                <div className="col-sm-6">
                                    <SelectGroup data={['---','Uber']} title={'Do you currently drive for another company?'} name={'has_license'} 
                                        nowsel={this.state.has_license} onChange={this.onChange.bind(this)} />
                                </div>
                            </div>
                            <div className="text-center login-actions" style={{ marginTop: '4rem' }}>
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <input type="button" className="btn btn-round-primary d-block w-60" onClick={()=>this.onSubmit()} value="Next" />
                                </div>
                                <div className="d-block mt-5" style={{fontSize:'1.5rem'}}>
                                    <Link to='/signup/as-driver' style={{color:'inherit'}}>{'<'}&nbsp;&nbsp;&nbsp;{'Back'}</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <LastFooter />
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
    forSignupDataSet,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
)(First))