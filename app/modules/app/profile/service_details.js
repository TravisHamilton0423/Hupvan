import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BorderedTitle from '../book/components/BorderedTitle';
import history from 'browserHistory'

import {
    getCurrentBooks,
    cancelBook,
    bookInitialDataSet,
} from '../book/redux/actions'

const ServiceDetails = (props) => {
    const [flag, setFlag] = useState(0)
    if(flag === 0){
        props.getCurrentBooks()
        setFlag(1)
    }
    const cancelBook = (id) => {
        props.cancelBook({id: id})
    }
    const editBook = (id) => {
        let index = props.books[id].id
        let book = {
            ...props.books[id],
            ...props.books[id].detail,
        }
        if(book.store_house)
            book.storehouse_id = book.store_house
        else
            book.storehouse_id = -1
        book.id = index
        props.bookInitialDataSet(book)
        history.push('/book/general')
    }
    return (
        <div>
            <div className="title">Service details</div>
            <div className="splitter" />
            <div className="gap-1"></div><div className="gap-1"></div>
            <div className="main-content">
                { props.books.map((book,index)=>(
                    <React.Fragment>
                        <div className="col-sm-12 out-container">
                            <div className="in-container">
                                <div className="w-100 d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={"/assets/img/"+book.type+".png"} className="resized-image-2-5" />
                                        <div className="green-text-1-1">&nbsp;&nbsp;Move {book.type}</div>
                                    </div>
                                    { book.state === 'waiting' &&
                                        (<input type="button" value="Edit" className="only-bordered-button color-green" onClick={()=>editBook(index)} />)
                                    }
                                </div>
                                <div className="gap-1"></div>
                                <div className="split-horizontal-line"></div>
                                <div className="gap-1"></div>
                                <BorderedTitle title="Move Details" />
                                <div className="in-in-container">
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
                                    { book.detail && book.detail.time &&
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
                            </div>
                            <div className="gap-1"></div>
                            <div className="in-container d-flex justify-content-between text-color-green font-size-1-5 bg-color-gray">
                                <div>Total</div>
                                <div>£{book.cost}</div>
                            </div>
                            { book.state === 'waiting' &&
                                <React.Fragment>
                                    <div className="gap-1"></div>
                                    <div className="row">
                                        <div className="col-sm-4"></div>
                                        <div className="col-sm-8 padding-right-2">
                                            <input type="button" className="btn btn-round-primary w-100 font-size-1-5-and-padding" value="Cancel"
                                                onClick={() => cancelBook(book.id)} />
                                        </div>
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                        <div className="gap-1"></div><div className="gap-1"></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (store) => ({
    books: store.app.book.books,
});

const mapDispatchToProps = {
    getCurrentBooks,
    cancelBook,
    bookInitialDataSet,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(ServiceDetails))