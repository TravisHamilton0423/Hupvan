import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import BorderedTitle from '../components/BorderedTitle';
import history from 'browserHistory'

import {
    bookRequestDataSet,
} from '../redux/actions'
import SecondStorage from '../storage/second';

const data = ["First floor","Second floor","Third floor","Fourth floor","Fifth floor"]

const image_urls = [
    "room-1.png",
    "room-2.png",
    "room-1.png",
]

const BookOfficeSecond = (props) => {
    const [floor, setFloor] = useState(props.requestData.floor || "First floor")
    const [number_of_rooms, setRoom] = useState(props.requestData.number_of_rooms || 1)
    const [lift, setLift] = useState(props.requestData.lift!==undefined?props.requestData.lift:1)
    const [detail, setDetail] = useState(props.requestData.detail || '')
    const [items, setItems] = useState(props.requestData.items?props.requestData.items:[])
    const [storage, setStorage] = useState({})
    const [storehouse, setStorehouse] = useState({})
    const onClick = (e) => {
        let eventId = e.target.id;
        if(eventId === 'item-add') {
            let item_name = $('#input-item-add').val();
            let new_items = [ ...items, {
                name: item_name,
                amount: 1,
            } ]
            setItems(new_items)
            $('#input-item-add').val('')
            return
        }
        let current_value = Number($('#'+eventId.slice(0,-4))[0].innerText), type = eventId.slice(-3)
        if(type === 'add')
            current_value ++
        else
            current_value --
        if(current_value < 1)
            current_value = 1
        if(eventId.slice(0,-4) === 'room-number')
            setRoom(current_value)
        let index = eventId.slice(-5,-4)
        if(index >= '0' && index <= '9'){
            index = Number(index)
            let new_items = [
                ...items
            ]
            new_items[index].amount = current_value
            setItems(new_items)
        }
    }
    const onSubmit = () => {
        let floor, number_of_rooms, lift, detail;
        floor = $('#floor').val()
        number_of_rooms = Number($('#room-number')[0].innerText)
        lift = $('#has-lift')[0].checked
        detail = $('#detail').val()
        props.bookRequestDataSet({
            items,
            floor,
            number_of_rooms,
            lift,
            detail,
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
                        <div className="in-container">
                            <BorderedTitle title="Describe your place" />
                            <div className="in-in-container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div>&nbsp;&nbsp;&nbsp;Select date</div>
                                        <select id="floor" className="w-100 form-control height-3 font-size-1-2-rem" placeholder="Pick up address"
                                                 value={floor} onChange={(e)=>{setFloor(e.target.value)}}>
                                            { data.map((name) => (
                                                <option key={name} value={name}>{name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-sm-3">
                                        <div>&nbsp;&nbsp;&nbsp;Number of rooms</div>
                                        <div className="align-center form-control height-3">
                                            <div id="room-number-sub" className="add-or-sub" onClick={onClick}>
                                                <span id="room-number-sub" className="fa fa-minus"></span>
                                            </div>
                                            <div id="room-number" className="number-big">{number_of_rooms}</div>
                                            <div id="room-number-add" className="add-or-sub" onClick={onClick}>
                                                <span id="room-number-add" className="fa fa-plus"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div>&nbsp;&nbsp;&nbsp;Is there a lift?</div>
                                        <div className="align-center form-control height-3">
                                            <div className="row align-items-center w-100">
                                                <div className="col-6 d-flex align-items-center pr-0 pl-3">
                                                    { lift ? (
                                                        <input id="has-lift" type="radio" name="is-there-a-lift" className="radio-size" value="yes" checked onClick={()=>setLift(0)} />
                                                    ):(
                                                        <input id="has-lift" type="radio" name="is-there-a-lift" className="radio-size" value="yes" onClick={()=>setLift(1)} />
                                                    )}
                                                    <label htmlFor="is-there-a-lift" className="mb-0 font-size-1-2-rem" >&nbsp;Yes</label>
                                                </div>
                                                <div className="col-6 d-flex align-items-center pr-0 pl-3">
                                                    { lift ? (
                                                        <input type="radio" name="is-there-a-lift" className="radio-size" value="no" onClick={()=>setLift(0)} />
                                                    ):(
                                                        <input type="radio" name="is-there-a-lift" className="radio-size" value="no" checked onClick={()=>setLift(1)} />
                                                    )}
                                                    <label htmlFor="is-there-a-lift" className="mb-0 font-size-1-2-rem" >&nbsp;No</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rem1-gap"></div>
                        <div className="in-container">
                            <BorderedTitle title="Select items" />
                            <div className="in-in-container mt-4">
                                <div>&nbsp;&nbsp;&nbsp;Select items</div>
                                <div className="row">
                                    { items.map((item, index) => (
                                        <div className="col-sm-6 mt-2" key={index}>
                                            <div className="d-flex align-items-center justify-content-between form-control height-3">
                                                <div className="font-size-1-2-rem pl-1">{item.name}</div>
                                                <div className="d-flex align-items-center">
                                                    <div id={"item-count-"+index+"-sub"} className="add-or-sub small" onClick={onClick}>
                                                        <span id={"item-count-"+index+"-sub"} className="fa fa-minus"></span>
                                                    </div>
                                                    <div id={"item-count-"+index} className="number-small">{item.amount}</div>
                                                    <div id={"item-count-"+index+"-add"} className="add-or-sub small" onClick={onClick}>
                                                        <span id={"item-count-"+index+"-add"} className="fa fa-plus"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-sm-6 mt-2">
                                        <div className="d-flex align-items-center justify-content-between form-control height-3 new-item">
                                            <input type="text" id="input-item-add" className="font-size-1-2-rem pl-1 form-control w-100 mr-3 no-border" placeholder="Add item" />
                                            <div className="d-flex align-items-center">
                                                <div id="item-add" className="add-or-sub gray" onClick={onClick}>
                                                    <span id="item-add" className="fa fa-plus"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rem1-gap"></div>
                        <div className="in-container">
                            <BorderedTitle title="Add pictures" />
                            <div className="rem1-gap"></div>
                            <div className="in-in-container on-computer">
                                <div className="out-container pl-0 d-flex">
                                    <div className="d-flex w-100" style={{overflowX:'auto'}}>
                                        { image_urls.map((image_url, index) => (
                                            <img key={index} src={"/assets/img/booking/"+image_url} className="book-image" />
                                        )) }
                                    </div>
                                    <div className="image-import-container d-flex flex-column justify-content-center align-items-center">
                                        <div className="computer-resized-image-container">
                                            <img src="/assets/img/import.png" className="computer-resized-image" />
                                        </div>
                                        <div className="computer-text">Import</div>
                                    </div>
                                </div>
                            </div>
                            <div className="in-in-container on-phone">
                                <div className="row w-100 rounded-1rem-border ml-0">
                                    <div className="col-6 align-center flex-column">
                                        <div className="resized-image-container">
                                            <img src="/assets/img/camera.png" className="resized-image" />
                                        </div>
                                        <div className="phone-text">Snap photos of your place</div>
                                    </div>
                                    <div className="split-verticle-line"></div>
                                    <div className="col-6 align-center flex-column">
                                        <div className="resized-image-container">
                                            <img src="/assets/img/import.png" className="resized-image" />
                                        </div>
                                        <div className="phone-text">Import from gallery</div>
                                    </div>
                                </div>
                                <div className="rounded-shadow-box">
                                    <div className="d-flex w-100" style={{overflowX:'auto'}}>
                                        { image_urls.map((image_url, index) => (
                                            <img key={index} src={"/assets/img/booking/"+image_url} className="book-image" />
                                        )) }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rem1-gap"></div>
                        <div className="in-container">
                            <BorderedTitle title="Additional details" />
                            <div className="rem1-gap"></div>
                            <div className="in-in-container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div>&nbsp;&nbsp;&nbsp;Add Special Requests & Instructions</div>
                                        <textarea id="detail" className="form-control w-100 rounded-textarea height-7">{ detail }</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { props.addStorageFlag? (
                            <SecondStorage totstore={storehouse} storages={props.storages} setStorage={setStorage} setStorehouse={setStorehouse} />
                        ):(
                            <React.Fragment></React.Fragment>
                        )}
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
    addStorageFlag: store.app.book.addPartnerFlag,
    requestData: store.app.book.initialData,
    storages: store.app.book.storages,
});

const mapDispatchToProps = {
    bookRequestDataSet,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(BookOfficeSecond))