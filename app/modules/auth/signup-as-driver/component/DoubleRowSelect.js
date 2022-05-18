import React from 'react';

const DoubleRowSelect = (props) => {
    return (
        <React.Fragment>
            <select className="form-control" id={props.name.replace(/ /g,'_')} style={{height:'3.2rem',paddingTop:'1.1rem'}}>
                { props.data.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
            <p className="form-type" style={{marginLeft:`${props.margin}`}}>{props.name}</p>
            {/* <div className="bottom-line"></div> */}
            <p style={{color:'#31AA45',fontSize:'0.7rem',marginTop:'0.2rem',textAlign:'right',marginRight:'1rem'}}>
                {props.validation}
            </p>
        </React.Fragment>
    );
};

export default DoubleRowSelect;