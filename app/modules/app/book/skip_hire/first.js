import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BorderedTitle from '../components/BorderedTitle';
import RadioGroup from '../../../auth/signup-as-driver/component/RadioGroup'
import CheckBox from '../components/CheckBox';

import {
    bookAddPartner,
} from '../redux/actions'

const firstCapitalize = (type) => {
    console.log(type)
    let retval = type.split('')
    retval[0] = retval[0].toUpperCase()
    return retval.join('').replace('_',' ')
}

class SkipHireFirst extends Component {
    state = {
        type_of_waste: 'General',
        check: 0,
    }
    componentWillMount(){
        if(this.props.data.type && firstCapitalize(this.props.data.type) === this.props.menu_sel){
            this.props.setNewData({
                pickup_address: this.props.data.pickup_address,
                from_datetime: this.props.data.from_datetime,
                until_datetime: this.props.data.until_datetime,
                type_of_waste: firstCapitalize(this.props.data.type_of_waste),
            })
            this.setState({
                type_of_waste: firstCapitalize(this.props.data.type_of_waste),
            })
        }
        else{
            this.props.setNewData({
                pickup_address: '',
                from_datetime: '',
                until_datetime: '',
                type_of_waste: 'General',
            })
            this.setState({
                type_of_waste: 'General',
                check: 0,
            })
        }
        this.props.bookAddPartner(0)
    }
    componentWillReceiveProps(nextProps){
        if(this.props.menu_sel != nextProps.menu_sel){
            this.props.bookAddPartner(0)
            this.props.setNewData({
                pickup_address: '',
                from_datetime: '',
                until_datetime: '',
                type_of_waste: 'General',
            })
            this.setState({
                type_of_waste: 'General',
                check: 0,
            })
        }
    }
    onStateChange(name,val) {
        var state = {}
        state[name] = val
        this.setState(state)

        let newData = this.props.data;
        newData[name] = val.toLowerCase();
        this.props.setData(newData)

        newData = this.props.newData;
        newData[name] = val.toLowerCase();
        this.props.setNewData(newData)
    }
    onChange(e) {
        let newData = this.props.data;
        newData[e.target.id] = e.target.value;
        this.props.setData(newData)
        let newNewData = this.props.newData
        newNewData[e.target.id] = e.target.value
        this.props.setNewData(newNewData)
    }
    setCheck() {
        this.props.bookAddPartner(1-this.state.check)
        this.setState({
            check: 1-this.state.check,
        })
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
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div>&nbsp;&nbsp;&nbsp;Select date</div>
                                <div className="date-time">
                                    <input type="datetime-local" className="w-100 form-control" id='from_datetime' 
                                        value={data.from_datetime || ''} onChange={(e)=>this.onChange(e)} />
                                    <div className="bottom-line"></div>
                                    <img src="/assets/img/calendar.png" />
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div>&nbsp;&nbsp;&nbsp;Select date</div>
                                <div className="date-time">
                                    <input type="datetime-local" className="w-100 form-control" id='until_datetime' 
                                        value={data.until_datetime || ''} onChange={(e)=>this.onChange(e)} />
                                    <div className="bottom-line"></div>
                                    <img src="/assets/img/calendar.png" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <div>&nbsp;&nbsp;&nbsp;Type of waste</div>
                                <RadioGroup data={['General','Plasterboard']} name={'type_of_waste'} 
                                    nowsel={this.state.type_of_waste || 'General'} onChange={this.onStateChange.bind(this)} no_margin={1} />
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
                                <div className="w-100 form-control checkbox d-flex align-items-center justify-content-left pl-3">
                                    <CheckBox check={this.state.check} setCheck={this.setCheck.bind(this)} />
                                    <div>Add van service?</div>
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
});

const mapDispatchToProps = {
    bookAddPartner,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
)(SkipHireFirst))