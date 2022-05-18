import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BorderedTitle from '../components/BorderedTitle';
import CheckBox from '../components/CheckBox';

import {
    bookAddPartner,
} from '../redux/actions'

const firstCapitalize = (type) => {
    let retval = type.split('')
    retval[0] = retval[0].toUpperCase()
    return retval.join('').replace('_',' ')
}

class BookOfficeFirst extends Component {
    state = {
        check: this.props.addPartnerFlag,
    }
    componentWillMount(){
        if(this.props.data.type && firstCapitalize(this.props.data.type) === this.props.menu_sel){
            this.props.setNewData({
                pickup_address: this.props.data.pickup_address,
                destination_address: this.props.data.destination_address,
                date: this.props.data.date,
                time: this.props.data.time,
            })
        }
        else{
            this.props.setNewData({
                pickup_address: '',
                destination_address: '',
                date: '',
                time: '',
            })
        }
        if(this.props.data.storehouse_id && this.props.data.storehouse_id != -1){
            this.props.bookAddPartner(1)
            this.setState({
                check: 1,
            })
        }
        else{
            this.props.bookAddPartner(0)
            this.setState({
                check: 0,
            })
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(this.props.menu_sel)
        if(this.props.menu_sel != nextProps.menu_sel){
            this.props.setNewData({
                pickup_address: '',
                destination_address: '',
                date: '',
                time: '',
            })
            this.props.bookAddPartner(0)
            this.setState({
                check: 0,
            })
        }
    }
    setCheck() {
        this.props.bookAddPartner(1-this.state.check)
        this.setState({
            check: 1-this.state.check
        })
    }
    onChange(e) {
        let newData = this.props.data;
        newData[e.target.id] = e.target.value;
        this.props.setData(newData)
        let newNewData = this.props.newData
        newNewData[e.target.id] = e.target.value
        this.props.setNewData(newNewData)
    }
    render() {
        let data = this.props.newData || {}
        return (
            <div>
                <div className="in-container">
                    <BorderedTitle title="Select destination and date" />
                    <div className="in-in-container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div>&nbsp;&nbsp;&nbsp;Pick up adress</div>
                                <div className="address">
                                    <input className="w-100 form-control" placeholder="Pick up address" id='pickup_address'
                                        value={data.pickup_address || ''} onChange={(e)=>this.onChange(e)} />
                                    <div className="bottom-line"></div>
                                    <img src="/assets/img/map-marker.png" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>&nbsp;&nbsp;&nbsp;Destination adress</div>
                                <div className="address">
                                    <input className="w-100 form-control" placeholder="Destination address" id='destination_address'
                                        value={data.destination_address || ''} onChange={(e)=>this.onChange(e)} />
                                    <div className="bottom-line"></div>
                                    <img src="/assets/img/map-marker.png" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div>&nbsp;&nbsp;&nbsp;Select date</div>
                                <div className="date-time">
                                    <input type="date" className="w-100 form-control" placeholder="Pick up address" id='date'
                                        value={data.date || ''} onChange={(e)=>this.onChange(e)} />
                                    <div className="bottom-line"></div>
                                    <img src="/assets/img/calendar.png" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div>&nbsp;&nbsp;&nbsp;Time</div>
                                <div className="date-time">
                                    <input type="time" className="w-100 form-control" placeholder="Destination address" id='time'
                                        value={data.time || ''} onChange={(e)=>this.onChange(e)} />
                                    <div className="bottom-line"></div>
                                    <img src="/assets/img/clock.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rem1-gap"></div>
                <div className="in-container">
                    <BorderedTitle title="Additional Service" />
                    <div className="in-in-container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="w-100 form-control checkbox d-flex align-items-center justify-content-center">
                                    <CheckBox check={this.state.check} setCheck={this.setCheck.bind(this)} />
                                    <div>Would you like to add storage?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (store) => ({
    addPartnerFlag: store.app.book.addPartnerFlag,
});

const mapDispatchToProps = {
    bookAddPartner,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
)(BookOfficeFirst))