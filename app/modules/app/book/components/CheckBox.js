import React from 'react';

const CheckBox = (props) => {
    const onClick = () => {
        props.setCheck(1-props.check)
    }
    return (
        <div className="outer-check align-center" onClick={()=>onClick()}>
            {
                props.check? (
                    <div className="inner-check">
                    </div>
                ):(
                    <React.Fragment></React.Fragment>
                )
            }
        </div>
    );
};

export default CheckBox;