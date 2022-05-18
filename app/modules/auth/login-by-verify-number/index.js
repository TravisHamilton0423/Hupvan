import React from 'react';
import LastFooter from '../../app/components/LastFooter';
import history from '../../../browserHistory'
import Link from 'react-router-dom/Link';

const LoginByNumber = () => {
    const onSubmit = (e) => {
        e.preventDefault()
        history.push('/login/by-verify-number/final')
    }
    return (
        <div className="modal-view">
            <div className="main-content">
                <Link className="close-icon" to="/">&times;</Link>

                <div className="logo-wrapper">
                    <Link className="navbar-brand logo-link" to="/">Hup<span>van</span></Link>
                </div>

                <div className="modal-wrapper ">
                    <div className="modal-inner">
                        <form className="hupvan-form user-signin" onSubmit={onSubmit}>
                            <div className="text-center mb-6">
                                <img src="/assets/img/phone-number.png" alt="User avataIcon" />
                            </div>
                            <p style={{fontSize:'20px',marginLeft:'1rem',color:'#4D4D4D'}}>Let’s verify your number</p>
                            <div className="mb-4" style={{position:'relative'}}>
                                <select style={{position:'absolute',top:'0.1rem',height:'2.8rem',fontSize:'14px',left:'0.15rem',borderWidth:'1px',
                                        borderColor:'transparent #ced4da transparent transparent'}}>
                                    <option value="10">+44</option>
                                    <option value="10">+48</option>
                                </select>
                                <input type="text" className="form-control" style={{height:'3rem',paddingLeft:'4rem'}} id="phone-number" name="phone-number" required />
                            </div>

                            <div className="text-right mt-3">
                                <Link to="forgot-password"><strong>Recover an existing account</strong></Link>
                            </div>

                            <div className="text-center login-actions">
                                <input type="submit" className="btn btn-round-primary d-block w-100" value="Next" />
                                <Link to="/sign-up-to-driver" className="d-block mt-5">Login via email</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <LastFooter />
        </div>
    );
};

export default LoginByNumber;