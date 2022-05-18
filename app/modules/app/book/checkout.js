import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import BorderedTitle from './components/BorderedTitle';
import history from 'browserHistory'

import {
    bookCreate,
    bookInitialDataSet,
    bookRequestDataSet,
    bookPromoCodeCheck,
} from './redux/actions'
import { promoCodeCheck } from './redux/saga';

const Checkout = (props) => {
    let service = 0, storage = 0, promo_code = 0;
    if(props.type === 'Home' || props.type === 'Office' || props.type === 'Stuff'){
        service += 30
        service += (props.requestData.number_of_rooms*5)
        if(props.requestData.items){
            for(let i = 0; i < props.requestData.items.length; i ++)
                service += props.requestData.items[i].amount*2
        }
    }
    if(props.requestData.storehouse_id != -1)
        storage = props.requestData.storage;
    if(props.promoFlag)
        promo_code = -parseInt((service+storage)*props.promoPercent/100)
    const book = () => {
        let requestData = props.requestData
        requestData['type'] = props.type.toLowerCase().replace(' ','_')
        requestData['state'] = 'waiting'
        requestData['service'] = service
        requestData['storage'] = storage
        if(!requestData['storehouse_id'])
            requestData['storehouse_id'] = -1
        requestData['promo_code'] = promo_code
        if(props.initialData.id)
            requestData['id'] = props.initialData.id
        else
            requestData['id'] = 0
        if(!requestData['items'])
            requestData['items'] = []
        props.bookCreate(requestData)
        props.bookRequestDataSet({}, 1)
    }
    const onEdit = () => {
        let requestData = props.requestData
        requestData['type'] = props.type.toLowerCase().replace(' ','_')
        props.bookInitialDataSet(requestData)
        history.push('/book/general')
    }
    const promoApply = () => {
        let promo_code = $('#promo-code').val()
        props.bookPromoCodeCheck({
            promo_code,
        })
    }
    return (
        <div>
            <ProgressBar current_state={2} />
            <div className="container">
                <div className="d-flex align-items-center flex-column">
                    <div className="col-sm-11 out-container">
                        <div className="in-container">
                            <div className="w-100 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src="/assets/img/home.png" className="resized-image-2-5" />
                                    <div className="green-text-1-1">&nbsp;&nbsp;Move Home</div>
                                </div>
                                <input type="button" value="Edit" onClick={()=>onEdit()} className="only-bordered-button color-green" />
                            </div>
                            <div className="rem1-gap"></div>
                            <div className="split-horizontal-line"></div>
                            <div className="rem1-gap"></div>
                            <BorderedTitle title="Move details" />
                            <div className="in-in-container">
                                { props.requestData.pickup_address &&
                                    <div className="w-100 d-flex justify-content-between">
                                        <span className="front-text">Location</span>
                                        <span className="end-text">{props.requestData.pickup_address}</span>
                                    </div>
                                }
                                { props.requestData.destination_address &&
                                    <div className="w-100 d-flex justify-content-between">
                                        <span className="front-text">Destination</span>
                                        <span className="end-text">{ props.requestData.destination_address }</span>
                                    </div>
                                }
                                <div className="rem1-gap"></div>
                                { props.requestData.number_of_rooms &&
                                    <div className="w-100 d-flex justify-content-between">
                                        <span className="front-text">Move details</span>
                                        <span className="end-text">{ props.requestData.number_of_rooms } Bedrooms</span>
                                    </div>
                                }
                                { props.requestData.date &&
                                    <div className="w-100 d-flex justify-content-between">
                                        <span className="front-text">Date</span>
                                        <span className="end-text">{ props.requestData.date }</span>
                                    </div>
                                }
                                { props.requestData.time &&
                                    <div className="w-100 d-flex justify-content-between">
                                        <span className="front-text">Time</span>
                                        <span className="end-text">{ props.requestData.time }</span>
                                    </div>
                                }
                                { props.requestData.from_datetime &&
                                    <div className="w-100 d-flex justify-content-between">
                                        <span className="front-text">From</span>
                                        <span className="end-text">{ props.requestData.from_datetime }</span>
                                    </div>
                                }
                                { props.requestData.until_datetime &&
                                    <div className="w-100 d-flex justify-content-between">
                                        <span className="front-text">Until</span>
                                        <span className="end-text">{ props.requestData.until_datetime }</span>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="rem1-gap"></div>
                        <div className="in-container">
                            <BorderedTitle title="Pricing" />
                            <div className="in-in-container">
                                <div className="w-100 d-flex justify-content-between">
                                    <span className="front-text">Service</span>
                                    <span className="end-text">£{service}</span>
                                </div>
                                <div className="split-horizontal-gray-line"></div>
                                <div className="w-100 d-flex justify-content-between">
                                    <span className="front-text">Storage</span>
                                    <span className="end-text">£{storage}</span>
                                </div>
                                <div className="split-horizontal-gray-line"></div>
                                <div className="w-100 d-flex justify-content-between">
                                    <span className="front-text">Promo code</span>
                                    <span className="end-text">£{promo_code}</span>
                                </div>
                            </div>
                        </div>
                        { !props.promoFlag ?(
                            <React.Fragment>
                                <div className="rem1-gap"></div>
                                <div className="in-container">
                                    <BorderedTitle title="Payment" />
                                    <div className="w-100 row justify-content-between align-items-center">
                                        <div className="d-flex align-items-center col-sm-3 h-3-rem div-container justify-content-between ml-4">
                                            <div className="circle-1-2 border-color-green">
                                                <div className="circle-0-8 bg-color-green"></div>
                                            </div>
                                            <div>
                                                <img src="/assets/img/circle_group.png" />
                                                <span className="letter-spacing-3 font-size-0-8">&nbsp;···· 4567</span>
                                            </div>
                                            <span className="fa fa-angle-down angle-down"></span>
                                        </div>
                                        <div className="col-sm-8 d-flex payment-container">
                                            <div className="flex-1"></div>
                                            <div className="row d-flex phone-w-100">
                                                <input id="promo-code" type="text" placeholder="Promo code" className="form-control only-bordered-button color-gray size-lg w-8-rem phone-col-sm-8 ml-2 float-right" />
                                                &nbsp;&nbsp;<input type="button" value="Apply" onClick={()=>promoApply()} className="only-bordered-button color-green size-lg phone-col-sm-4 ml-2 float-right" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ):(
                            <React.Fragment></React.Fragment>
                        )}
                        <div className="rem1-gap"></div>
                        <div className="in-container d-flex justify-content-between text-color-green font-size-1-5 bg-color-gray">
                            <div>Total</div>
                            <div>£{service+storage+promo_code}</div>
                        </div>
                    </div>
                    <div className="rem3-gap"></div>
                    <div className="col-sm-11">
                        <div className="row">
                            <div className="col-sm-7"></div>
                            <div className="col-sm-5">
                                <input type="button" className="btn btn-primary w-100 border-0 text-center pr-3 pl-3" value="Book"
                                    onClick={()=>book()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (store) => ({
    requestData: store.app.book.requestData,
    type: store.app.book.currentType,
    promoPercent: store.app.book.promoPercent,
    addPartnerFlag: store.app.book.addPartnerFlag,
    initialData: store.app.book.initialData,
    promoFlag: store.app.book.promoFlag,
});

const mapDispatchToProps = {
    bookCreate,
    bookRequestDataSet,
    bookInitialDataSet,
    bookPromoCodeCheck,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(Checkout))