import React from 'react';
import LastFooter from './LastFooter';
import Link from 'react-router-dom/Link';

const Footer = (props) => {
    return (
        <section className="footer" style={props.footer_style && {backgroundColor:'#EDF2F2'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <h2 className="logo-link">Hup
                            <span>van</span>
                        </h2>
                        <p className="desc">Move or deliver anything from home to stuff anytime with{' '}
                            <strong>Hupvan.</strong>
                        </p>
                        <p>
                            <img src="/assets/img/app_store.png" className="app-store-logo" />&nbsp;&nbsp;&nbsp;
                            <img src="/assets/img/google_play.png" className="google-play-logo" />
                        </p>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h5 className="font-weight-bold">Huptown</h5>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Drive</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Experience Provider</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">TownPass</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="font-weight-bold">Help</h5>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Help center</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Privacy and terms of service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <LastFooter />
        </section>
    );
};

export default Footer;