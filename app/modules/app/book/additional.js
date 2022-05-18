import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BookOfficeSecond from './office/second'
import SkipHireSecond from './skip_hire/second'

import {
    bookStorageGet,
    bookPromoCodeSuccess,
} from './redux/actions'
import Redirect from 'react-router-dom/Redirect';

const firstType = ['Home','Office','Stuff']
const secondType = ['Rubbish']
const thirdType = ['Skip hire', 'Storage']

class BookAdditional extends Component {
    componentWillMount() {
        this.props.bookStorageGet()
        this.props.bookPromoCodeSuccess(0)
    }
    render(){
        return (
            <div>
                { firstType.includes(this.props.type)?(
                    <BookOfficeSecond />
                ):secondType.includes(this.props.type)?(
                    <Redirect to="/book/checkout"/>
                ):thirdType.includes(this.props.type)?(
                    <SkipHireSecond />
                ):(
                    <React.Fragment></React.Fragment>
                )}
                
            </div>
        );
    }
    
};

const mapStateToProps = (store) => ({
    type: store.app.book.currentType,
});

const mapDispatchToProps = {
    bookStorageGet,
    bookPromoCodeSuccess,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(BookAdditional))