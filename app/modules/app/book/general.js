import React, { useState, Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import BorderedTitle from './components/BorderedTitle';
import MovingMenu from './components/MovingMenu';
import BookOfficeFirst from './office/first';
import RubbishFirst from './rubbish/first';
import SkipHireFirst from './skip_hire/first';
import history from 'browserHistory'

import {
    bookRequestDataSet,
    bookInitialDataSet,
    bookSetCurrentType,
    bookAddPartner,
} from './redux/actions'

const img_urls = [
    "home.png",
    "office.png",
    'stuff.png',
    'rubbish.png',
    'skip-hire.png',
    'storage.png',
]

const name = [
    "Home",
    "Office",
    'Stuff',
    'Rubbish',
    'Skip hire',
    'Storage',
]

const firstCapitalize = (type) => {
    let retval = type.split('')
    retval[0] = retval[0].toUpperCase()
    return retval.join('').replace('_',' ')
}

const flag = [0,0,0,1,0,1]

class BookGeneral extends Component {
    state = {
        menu_sel: (this.props.requestData.type && firstCapitalize(this.props.requestData.type)) || 'Home',
        data: this.props.requestData || {},
        newData: {},
    }
    selectMenu(val) {
        if(this.state.menu_sel != val){
            this.setState({
                newData: {},
                data: {},
                menu_sel: val,
            })
            this.props.bookInitialDataSet({})
            this.props.bookAddPartner(0)
        }
    }
    setData(val) {
        this.setState({
            data: val,
        })
    }
    setNewData(val) {
        this.setState({
            newData: val,
        })
    }
    onNext() {
        const {menu_sel, newData} = this.state
        if(menu_sel === 'Rubbish'){
            newData['storage'] = 0
            newData['storehouse_id'] = -1
            this.props.bookRequestDataSet(newData, 1)
        }
        else{
            this.props.bookRequestDataSet(newData, 1)
        }
        this.props.bookSetCurrentType(menu_sel)
        history.push('/book/additional')
    }
    render(){
        let { data, newData, menu_sel } = this.state
        return (
            <div>
                <ProgressBar current_state={0} />
                <div className="container">
                    <div className="d-flex align-items-center flex-column">
                        <div className="col-sm-11 out-container">
                            <div className="in-container">
                                <BorderedTitle title="What are you moving" />
                                <div className="d-flex overflow-x-scroll">
                                    { img_urls.map((url,index) => (
                                        <MovingMenu key={index} is_me={name[index]===menu_sel} selectMenu={this.selectMenu.bind(this)} 
                                            imgUrl={'/assets/img/'+url} name={name[index]} setData={this.setData.bind(this).bind(this)} flag={flag[index]} />
                                    ))}
                                </div>
                            </div>
                            <div className="rem1-gap"></div>
                            {
                                (menu_sel === 'Home' || menu_sel === 'Office' || menu_sel === 'Stuff')? (
                                    <BookOfficeFirst menu_sel={menu_sel} data={data} newData={newData} setData={this.setData.bind(this)} setNewData={this.setNewData.bind(this)} />
                                ):(menu_sel === 'Rubbish')?(
                                    <RubbishFirst menu_sel={menu_sel} data={data} newData={newData} setData={this.setData.bind(this)} setNewData={this.setNewData.bind(this)} />
                                ):(menu_sel === 'Skip hire' || menu_sel === 'Storage')?(
                                    <SkipHireFirst menu_sel={menu_sel} data={data} newData={newData} setData={this.setData.bind(this)} setNewData={this.setNewData.bind(this)} />
                                ):(
                                    <React.Fragment></React.Fragment>
                                )
                            }
                        </div>
                        <div className="rem3-gap"></div>
                        <div className="col-sm-11">
                            <div className="row">
                                <div className="col-sm-7"></div>
                                <div className="col-sm-5">
                                    <input type="button" className="btn btn-primary w-100 border-0 text-center pr-3 pl-3" value="Continue"
                                        onClick={()=>this.onNext()} />
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
    currentType: store.app.book.currentType,
    requestData: store.app.book.initialData,
});

const mapDispatchToProps = {
    bookRequestDataSet,
    bookSetCurrentType,
    bookInitialDataSet,
    bookAddPartner,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(BookGeneral))