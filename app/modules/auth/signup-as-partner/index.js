import React from 'react';
import LastFooter from '../../app/components/LastFooter';
import DoubleRowInput from '../signup-as-driver/component/DoubleRowInput';
import Link from 'react-router-dom/Link';

const SignupAsPartner = () => {
    return (
        <div className="modal-view">
            <div className="main-content">
                <Link className="close-icon" to="/">&times;</Link>

                <div className="logo-wrapper1">
                    <Link className="navbar-brand logo-link" to="/">Hup<span>van</span></Link>
                </div>

                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link className="navbar-brand logo-link1" to="/" style={{marginLeft:'3rem'}}>Hup<span>van</span><span className="vsplitter"></span><span>Partners</span></Link>
                </div>

                <div className="modal-wrapper ">
                    <div className="modal-inner">
                        <form className="hupvan-form user-signin">
                            <div className="text-center mb-6">
                                <img src="/assets/img/profile.png" alt="User avataIcon" />
                            </div>
                            
                            <div className="mb-4" style={{position:'relative'}}>
                                <DoubleRowInput type="email" name="Email" placeholder="Enter email" validation="You must enter a valid email"
                                    margin="0rem" />
                            </div>

                            <div className="mb-4" style={{position:'relative'}}>
                                <DoubleRowInput type="password" name="Password" placeholder="Password" validation="This field is required"
                                    margin="0rem" />
                            </div>

                            <div className="mb-4" style={{position:'relative'}}>
                                <DoubleRowInput type="password" name="Confirm password" placeholder="Retype password" validation="This field is required"
                                    margin="0rem" />
                            </div>

                            <div style={{textAlign:'center',color:'#999999',marginTop:'4rem'}}>
                                By signing up, I accept the Hupvan <span style={{color:'#31AA45'}}>Terms of Service</span> and acknowledge the <span style={{color:'#31AA45'}}>Privacy Policy</span>.
                            </div>

                            <div className="text-center login-actions" style={{marginTop:'4rem'}}>
                                <button className="btn btn-round-primary d-block w-100">
                                    Sign&nbsp;up
                                </button>
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

export default SignupAsPartner;