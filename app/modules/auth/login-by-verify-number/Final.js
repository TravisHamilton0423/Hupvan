import React from 'react';
import LastFooter from '../../app/components/LastFooter';
import CodeNumber from './component/CodeNumber';
import Link from 'react-router-dom/Link';

const LoginByVerifyNumberFinal = () => {
    return (
        <div className="modal-view">
            <div className="main-content">
                <Link className="close-icon" to="/">&times;</Link>

                <div className="logo-wrapper">
                    <Link className="navbar-brand logo-link" to="/">Hup<span>van</span></Link>
                </div>

                <div className="modal-wrapper ">
                    <div className="modal-inner">
                        <form className="hupvan-form user-signin">
                            <div className="text-center mb-6">
                                <img src="/assets/img/phone-verify.png" alt="User avataIcon" />
                            </div>
                            <p style={{fontSize:'20px',textAlign:'center',color:'#4D4D4D'}}>Enter code here</p>
                            <CodeNumber />
                            <div className="text-center login-actions">
                                <input type="submit" className="btn btn-round-primary d-block w-100" value="Verify" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <LastFooter />
        </div>
    );
};

export default LoginByVerifyNumberFinal;