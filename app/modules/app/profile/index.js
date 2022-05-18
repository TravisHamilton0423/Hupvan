import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SetSettings from './set_settings'
import ServiceDetails from './service_details';
import PreviousOrders from './previous_orders';
import SetPassword from './set_password';
import DriverServiceDetail from './driver_service_details'

const menuList = [
    'settings',
    'service_details',
    'previous_orders',
    'password',
]

const Profile = (props) => {
    const [menu_selected, setMenu] = useState(
        (props.currentUser && 
            (props.currentUser.role==='customer'?
                ()=>{
                    setTimeout(() => {
                        $('.menu-item').removeClass('selected')
                        $('#item-1').addClass('selected')
                        $('#item-5').addClass('selected')
                    }, 100);
                    return 'service_details'
                }
            :   ()=>{
                    setTimeout(() => {
                        $('.menu-item').removeClass('selected')
                        $('#item-2').addClass('selected')
                        $('#item-6').addClass('selected')
                    }, 100);
                    return 'previous_orders'
                }
            )
        )
         || 'settings'
    )
    const onClick = (e) => {
        $('.menu-item').removeClass('selected')
        let id = e.target.id
        const index = Number(id.slice(-1))%4
        id = id.slice(0,-1)
        $('#'+id+index).addClass('selected')
        $('#'+id+(index+4)).addClass('selected')
        setMenu(menuList[index])
    }
    return (
        <div className="profile">
            <div className="container background-gray">
                <div className="row">
                    <div className="col-sm-4 menu">
                        <div className="left-top">
                            <div>Profile</div>
                            <div className="d-flex flex-column align-items-center">
                                <div className="position-relative">
                                    <img src="/assets/img/avatar.png" className="avatar" />
                                    <div className="pencil d-flex justify-content-center align-items-center">
                                        {/* <span className="fa fa-pen"></span> */}
                                        <img src="/assets/img/my_pen.png" />
                                    </div>
                                </div>
                                <div>{props.currentUser.profile.name}</div>
                            </div>
                            <div className="splitter" />
                        </div>
                        <div className="left-menu">
                            <div className="menu-item selected" id="item-0" onClick={(e)=>onClick(e)}>Settings</div>
                            <div className="menu-item" id="item-1" onClick={(e)=>onClick(e)}>
                                { props.currentUser.role === 'customer' ? 'Service details' : 'Previous offers' }
                            </div>
                            <div className="menu-item" id="item-2" onClick={(e)=>onClick(e)}>
                                { props.currentUser.role === 'customer' ? 'Previous order' : 'Offers' }
                            </div>
                            <div className="menu-item" id="item-3" onClick={(e)=>onClick(e)}>Password</div>
                        </div>
                    </div>
                    <div className="col-sm-4 phone-menu">
                        <div className="left-top position-relative">
                            <div className="menu-title">{props.currentUser.profile.name}</div>
                            <div className="d-flex flex-column align-items-center">
                                <div className="avatar-group">
                                    <div className="position-relative">
                                        <img src="/assets/img/avatar.png" className="avatar" />
                                        <div className="pencil d-flex justify-content-center align-items-center">
                                            <span className="fa fa-pen"></span>
                                            <img src="/assets/img/my_pen.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left-menu">
                            <div className="menu-item selected" id="item-4" onClick={(e)=>onClick(e)}>Settings</div>
                            <div className="menu-item" id="item-5" onClick={(e)=>onClick(e)}>Service details</div>
                            <div className="menu-item" id="item-6" onClick={(e)=>onClick(e)}>Previous order</div>
                            <div className="menu-item" id="item-7" onClick={(e)=>onClick(e)}>Password</div>
                        </div>
                    </div>
                    <div className="col-sm-8 total background-white content">
                        {
                            menu_selected === 'settings' ? (
                                <SetSettings />
                            ):menu_selected === 'service_details'?(
                                props.currentUser.role === 'customer' ? (
                                    <ServiceDetails />
                                ):(
                                    <PreviousOrders />
                                )
                            ):menu_selected === 'previous_orders'?(
                                props.currentUser.role === 'customer' ? (
                                    <PreviousOrders />
                                ):(
                                    <DriverServiceDetail />
                                )
                            ):menu_selected === 'password'?(
                                <SetPassword />
                            ):(
                                <React.Fragment></React.Fragment>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (store) => ({
    currentUser: store.auth.currentUser,
});

const mapDispatchToProps = {
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(Profile))