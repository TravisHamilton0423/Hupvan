import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    getCurrentBooks,
    acceptBook,
    completeBook,
} from '../book/redux/actions'

const DriverServiceDetails = (props) => {
    const [flag, setFlag] = useState(0)
    if(flag === 0){
        props.getCurrentBooks()
        setFlag(1)
    }
    const acceptBook = (id) => {
        props.acceptBook({id: id})
    }
    const completeBook = (id) => {
        props.completeBook({id: id})
    }
    return (
        <div>
            <div className="title">Service details</div>
            <div className="splitter" />
            <div className="gap-1"></div><div className="gap-1"></div>
            <div className="main-content">
            <div className="col-sm-12 out-container del-all">
                { props.books.map((book) => (
                    <React.Fragment>
                        <div className="in-container">
                            <div className="w-100 d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={"/assets/img/"+book.type+".png"} className="resized-image-2-5" />
                                    <div className="green-text-1-1">&nbsp;&nbsp;Move {book.type}</div>
                                </div>
                                <div className="text-color-green font-size-1-5">£{book.cost}</div>
                            </div>
                            <div className="gap-1"></div>
                            <div className="split-horizontal-line"></div>
                            <div className="gap-1"></div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    { props.currentUser.role === 'customer'?(
                                        <div className="text-color-green">{book.driver_name}</div>
                                    ):(
                                        <div className="text-color-green">{book.customer_name}</div>
                                    )
                                    }
                                </div>
                                { book.state === 'waiting' ? (
                                    <input type="button" className="btn btn-round-primary col-sm-6 font-size-1-5-and-padding no-margin height-2-5" 
                                        value="Accept" onClick={() => acceptBook(book.id)} />
                                ):(
                                    <input type="button" className="btn btn-round-primary col-sm-6 font-size-1-5-and-padding no-margin height-2-5" 
                                        value="Complete" onClick={() => completeBook(book.id)} />
                                )
                                }
                            </div>
                            <div className="gap-1"></div>
                            { book.detail && book.detail.pickup_address &&
                                <div className="w-100 d-flex justify-content-between">
                                    <span className="front-text">Location</span>
                                    <span className="end-text">{book.detail.pickup_address}</span>
                                </div>
                            }
                            { book.detail && book.detail.destination_address &&
                                <div className="w-100 d-flex justify-content-between">
                                    <span className="front-text">Destination</span>
                                    <span className="end-text">{ book.detail.destination_address }</span>
                                </div>
                            }
                            <div className="rem1-gap"></div>
                            { book.detail && book.detail.number_of_rooms &&
                                <div className="w-100 d-flex justify-content-between">
                                    <span className="front-text">Move details</span>
                                    <span className="end-text">{ book.detail.number_of_rooms } Bedrooms</span>
                                </div>
                            }
                            { book.detail && book.detail.date &&
                                <div className="w-100 d-flex justify-content-between">
                                    <span className="front-text">Date</span>
                                    <span className="end-text">{ book.detail.date }</span>
                                </div>
                            }
                            { book.detail.time &&
                                <div className="w-100 d-flex justify-content-between">
                                    <span className="front-text">Time</span>
                                    <span className="end-text">{ book.detail.time }</span>
                                </div>
                            }
                            { book.detail && book.detail.from_datetime &&
                                <div className="w-100 d-flex justify-content-between">
                                    <span className="front-text">From</span>
                                    <span className="end-text">{ book.detail.from_datetime }</span>
                                </div>
                            }
                            { book.detail && book.detail.until_datetime &&
                                <div className="w-100 d-flex justify-content-between">
                                    <span className="front-text">Until</span>
                                    <span className="end-text">{ book.detail.until_datetime }</span>
                                </div>
                            }
                        </div>
                        <div className="gap-1"></div>
                    </React.Fragment>
                ))}
                </div>
                <div className="gap-1"></div>
            </div>
        </div>
    );
};

const mapStateToProps = (store) => ({
    currentUser: store.auth.currentUser,
    books: store.app.book.books,
});

const mapDispatchToProps = {
    getCurrentBooks,
    acceptBook,
    completeBook,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(DriverServiceDetails))