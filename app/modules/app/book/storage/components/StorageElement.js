import React from 'react';
import BoxInModalShowHide from './BoxInModalShowHide';
import history from 'browserHistory'

const StorageElement = (props) => {
    const {image, name, rating} = props.storage;
    const id = props.id;
    let prev_height, flag = 0;
    
    const onMouseOver = (id) => {
        if(flag || document.body.clientWidth <= 576) return
        prev_height = $('#'+id).css('height')
        $('#'+id).css('height',`${prev_height}`)
        $('#'+id).css('height',`calc(${prev_height} + 1rem)`)
        flag = 1
    }

    const onMouseLeave = (id) => {
        $('#'+id).css('height',`${prev_height}`)
        flag = 0
    }
    const onNext = () => {
        // history.push('/book/checkout')
        props.setStorage(props.storage)
    }
    return (
        <React.Fragment>
            <div className="my-col-md-4" onMouseOver={()=>onMouseOver(id)} onMouseLeave={()=>onMouseLeave(id)} 
                    data-toggle="modal" data-target={"#myModal"+id}>
                <div className="storage" id={id}>
                    <div className="storage-thumb">
                        <img src={image} />
                        <div className="storage-rating">
                            {' '}<span className="star"></span>
                            {' '}<span className="rating">
                                <i className="fa fa-star"></i>&nbsp;{rating}
                            </span>
                        </div>
                    </div>
                    <div className="storage-info">
                        <h5>{name}</h5>
                        <div className="storage-info-detail clearfix">
                            <div className="float-left distance">
                                <img src="/assets/img/clock.png" width="20" height="20" alt="Distance in minutes" />
                                {' '}<span className="away">
                                    {' '}<span className="label">Mins away</span>
                                    {' '}<span className="minutes">21</span>
                                </span>
                            </div>
                            <div className="float-right price">
                                {' '}<span className="price-label">From</span>
                                {' '}<span>59</span>
                                {' '}<span>$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id={"myModal"+id}>
                <div className="modal-dialog my-container mtb-10-rem-important">
                    <div className="modal-content my-col-sm-8 border-radius-20-px">
                        <div className="modal-body row">
                            <div className="p-4 col-sm-6 pt-0 pb-2 mt-2 position-relative">
                                <img src="/assets/img/man.png" className="width-fit-resize" />
                                <input type="button" data-dismiss="modal" value="X" className="position-absolute close-button align-center" />
                                <div className="modal-left-container">
                                    <div className="modal-left-title">
                                        <div className="modal-left-title-letter">{name}</div>
                                        <img src="/assets/img/heart.png" className="modal-left-title-image" />
                                    </div>
                                    <div className="d-flex justify-content-between modal-left-second">
                                        <div className="modal-left-second-left">
                                            <img src="/assets/img/map-marker.png" className="map-marker-image" />
                                            &nbsp;&nbsp;Yaroslav Val Street, 25
                                        </div>
                                        <div className="modal-left-second-right">From&nbsp;&nbsp;&nbsp;<span>£59</span></div>
                                    </div>
                                    <div className="d-flex justify-content-between modal-left-third">
                                        <div className="modal-box width-46 d-flex">
                                            <div className="d-flex align-items-center mr-2">
                                                <img src="/assets/img/clock.png" width="20" height="20" alt="Distance in minutes" />
                                            </div>
                                            <div>
                                                <div className="label">Mins away</div>
                                                <div className="minutes">21</div>
                                            </div>
                                        </div>
                                        <div className="modal-box width-46 d-flex">
                                            <div className="d-flex align-items-center mr-2">
                                                <img src="/assets/img/star.png" width="20" height="20" alt="Distance in minutes" />
                                            </div>
                                            <div>
                                                <div className="label">Rating</div>
                                                <div className="rating">{rating}/5.0</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="color-888888 pl-4 pr-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus egestas in arcu at diam magnis vitae curabitur. Non quam habitant aenean id ornare nibh. Nec lobortis tellus eleifend rutrum tempus blandit felis scelerisque ut. Pulvinar aliquet lectus laoreet egestas lobortis proin mi sit.
                                    </div>
                                </div>
                                <input type="button" data-dismiss="modal" className="btn btn-primary w-100 pl-0 pr-0 del-border mt-4 not-on-phone" value="Continue"  onClick={()=>onNext()} />
                            </div>
                            <div className="p-4 col-sm-6 pt-0 pb-2 mt-2">
                                { props.storage.storehouses.map((storehouse)=>(
                                    <BoxInModalShowHide flag={props.totstore.id === storehouse.id} storehouse={storehouse} setStorehouse={props.setStorehouse}  />
                                ))}
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <input type="button" className="btn btn-round-primary w-80 pl-0 pr-0 del-border mt-4 on-phone mb-6" 
                                value="Continue" data-dismiss="modal" onClick={()=>onNext()} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StorageElement;