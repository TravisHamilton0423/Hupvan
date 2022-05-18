import React from 'react';
import LastFooter from '../../app/components/LastFooter';
import DoubleRowInput from '../signup-as-driver/component/DoubleRowInput';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
    signupRequest
} from '../redux/actions'
import Link from 'react-router-dom/Link';

const SignUpAsCustomer = (props) => {
    const signUp = () => {
        let email = $('#Email').val(), password = $('#Password').val(), confirm_password = $('#Confirm-password').val(), 
            phone_number = $('#Phone-number').val(), verification_code = $('#Verification-code').val(), name = $('#Name').val();
        if(password !== confirm_password)
            return
        props.signupRequest({
            email,
            password,
            name,
            phone_number,
            verification_code,
            role: 'customer',
        })
    }
    return (
        <div className="modal-view">
            <div className="main-content">
                <Link className="close-icon" to="/">&times;</Link>

                <div className="logo-wrapper1">
                    <Link className="navbar-brand logo-link" to="/">Hup<span>van</span></Link>
                </div>

                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link className="navbar-brand logo-link1" to="/" style={{marginLeft:'3rem'}}>Hup<span>van</span><span className="vsplitter"></span><span>Customers</span></Link>
                </div>

                <div className="modal-wrapper ">
                    <div className="modal-inner">
                        <form className="hupvan-form user-signin">
                            <div className="text-center mb-6">
                                <img src="/assets/img/profile.png" alt="User avataIcon" />
                            </div>
                            
                            <div className="mb-4" style={{position:'relative'}}>
                                <DoubleRowInput type="email" name="Email" placeholder="Enter email" margin="0rem" />
                            </div>

                            <div className="mb-4" style={{position:'relative'}}>
                                <DoubleRowInput type="password" name="Password" placeholder="Password" margin="0rem" />
                            </div>

                            <div className="mb-4" style={{position:'relative'}}>
                                <DoubleRowInput type="password" name="Confirm-password" placeholder="Retype password" margin="0rem" />
                            </div>

                            <div className="mb-4" style={{position:'relative'}}>
                                <DoubleRowInput type="text" name="Name" placeholder="First and last name" margin="0rem" />
                            </div>

                            <div className="mb-4" style={{position:'relative'}}>
                                <DoubleRowInput type="text" name="Phone-number" placeholder="Phone number" margin="0rem" />
                            </div>

                            <div className="mb-4" style={{position:'relative'}}>
                                <DoubleRowInput type="text" name="Verification-code" placeholder="Verification code" margin="0rem" />
                            </div>

                            <div style={{textAlign:'center',color:'#999999',marginTop:'4rem'}}>
                                By signing up, I accept the Hupvan <span style={{color:'#31AA45'}}>Terms of Service</span> and acknowledge the <span style={{color:'#31AA45'}}>Privacy Policy</span>.
                            </div>

                            <div className="text-center login-actions" style={{marginTop:'4rem'}}>
                                <input type="button" className="btn btn-round-primary d-block w-100" value="Sign up" onClick={()=>signUp()} />
                                <div className="d-block mt-5">Already have an account?&nbsp;<Link to="/login">Sign in</Link></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <LastFooter />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
    signupRequest,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
)(SignUpAsCustomer))