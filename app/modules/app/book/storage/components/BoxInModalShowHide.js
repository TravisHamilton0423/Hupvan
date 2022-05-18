import React, {Component} from 'react';

class BoxInModalShowHide extends Component {
    onClick() {
        this.props.setStorehouse(this.props.storehouse)
    }
    render() {
        const { title, description, size, time, cost} = this.props.storehouse
        return (
            <div className="modal-box w-100 p-4 mb-3" style={this.props.flag?{border:'1px solid #31AA45',cursor:'pointer'}:{opacity:'1',cursor:'pointer'}}
                    onClick={()=>this.onClick()}>
                <div className="d-flex justify-content-between mb-3">
                    <div className="modal-box-top-left">
                        { title }
                    </div>
                    <div className="show-hide-button" onClick={()=>this.onClick()}>
                        <span className={this.props.flag?"fa fa-angle-up":"fa fa-angle-down"}></span>
                    </div>
                </div>
                { this.props.flag ? (
                    <div>
                        <div className="mb-3">What can it hold?</div>
                        <div className="mb-3 font-size-0-8">{description}</div>
                        <img src="/assets/img/stuff-group.png" className="w-100 h-auto" />
                    </div>
                ):(
                    <div></div>
                )}
                <div className="d-flex align-items-end justify-content-between mt-3">
                    <div>
                        <span>Size</span>
                        <span className="font-size-1-2-rem">&nbsp;{size} sq ft</span>
                    </div>
                    <div>
                        <span>Time</span>
                        <span className="font-size-1-2-rem">&nbsp;13:00</span>
                    </div>
                    <span className="found-1-2">£{cost}</span>
                </div>
            </div>
        );
    }
};

export default BoxInModalShowHide;