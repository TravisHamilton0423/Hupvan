import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    logout,
} from '../../auth/redux/actions'
import Link from 'react-router-dom/Link';
import history from 'browserHistory'
import { bookInitialDataSet, bookRequestDataSet } from '../book/redux/actions';

const Header = (props) => {
    const onClick = () => {
        props.logout()
        history.push('/')
    }
    const goTo = (url) => {
        props.bookInitialDataSet({})
        props.bookRequestDataSet({},1)
        history.push(url)
    }
    return (
        <section className="header">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link className="navbar-brand logo-link" to="/">Hup<span>van</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mr-5">
                                <Link className="nav-link" to="/driver">Driver</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/partner">Partner</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            {
                                props.currentUser ? (
                                    <div className="dropdown">
                                        <li className="nav-item nav-link mr-3 dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                            {props.currentUser.profile.name}&nbsp;&nbsp;&nbsp;
                                        </li>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            {
                                                props.currentUser.role === 'customer' &&
                                                <li className="nav-item mr-5 dropdown-item">
                                                    <span className="nav-link cursor-pointer" onClick={()=>goTo('/book/general')}>Book</span>
                                                </li>
                                            }
                                            <li className="nav-item mr-5 dropdown-item">
                                                <Link className="nav-link" to='/profile'>Profile</Link>
                                            </li>
                                            <li className="nav-item dropdown-item">
                                                <div className="nav-link cursor-pointer" onClick={()=>onClick()}>Logout</div>
                                            </li>
                                        </div>
                                    </div>
                                ):(
                                    <React.Fragment>
                                        <li className="nav-item mr-5">
                                            <Link className="nav-link" to='/login'>Sign-in</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/signup/'+props.current_url}>Sign-up</Link>
                                        </li>
                                    </React.Fragment>
                                )
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
};

const mapStateToProps = (store) => ({
    currentUser: store.auth.currentUser,
});

const mapDispatchToProps = {
    logout,
    bookInitialDataSet,
    bookRequestDataSet,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(Header))