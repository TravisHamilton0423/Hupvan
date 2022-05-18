import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import history from 'browserHistory'

import {
    bookRequestDataSet,
} from '../redux/actions'
import SecondStorage from '../storage/second';

const SkipHireSecond = (props) => {
    const [storage, setStorage] = useState({})
    const [storehouse, setStorehouse] = useState({})
    const onSubmit = () => {
        props.bookRequestDataSet({
            storehouse_id: storehouse.id || props.requestData.storehouse_id || -1,
            storage: storehouse.cost || props.requestData.storage || 0,
        })
        history.push('/book/checkout')
    }
    return (
        <div>
            <ProgressBar current_state={1} />
            <div className="container">
                <div className="d-flex align-items-center flex-column">
                    <div className="col-sm-11 out-container">
                        <SecondStorage totstore={storehouse} storages={props.storages} setStorage={setStorage} setStorehouse={setStorehouse} />
                        <div className="rem3-gap"></div>
                        <div className="col-sm-11">
                            <div className="row">
                                <div className="col-sm-7"></div>
                                <div className="col-sm-5">
                                    <input type="button" className="btn btn-primary w-100 border-0 text-center pr-3 pl-3" value="Continue" onClick={()=>onSubmit()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (store) => ({
    requestData: store.app.book.initialData,
    storages: store.app.book.storages,
});

const mapDispatchToProps = {
    bookRequestDataSet,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(SkipHireSecond))