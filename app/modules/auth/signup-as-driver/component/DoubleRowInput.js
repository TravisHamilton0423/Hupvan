import React from 'react';

const DoubleRowInput = (props) => {
    return (
        <React.Fragment>
            <input type={props.type} className="form-control" style={{height:'3.2rem',paddingTop:'1.1rem'}} 
                name={props.name} id={props.name.replace(/ /g,'_')} placeholder={props.placeholder} />
            <p className="form-type" style={{marginLeft:`${props.margin}`}}>{props.name}</p>
            { props.validation? <div className="bottom-line"></div>
                : <div></div> }
            {props.validation?(
                <p style={{color:'#31AA45',fontSize:'0.7rem',marginTop:'0.2rem',textAlign:'right',marginRight:'1rem',marginBottom:'-0.2rem'}}>
                    {props.validation}
                </p>
            ):(
                <p style={{color:'#31AA45',fontSize:'0.7rem',marginTop:'0.2rem',textAlign:'right',marginRight:'1rem',opacity:'0',
                        marginBottom:'-0.2rem'}}>
                    {'hahaha'}
                </p>
            )}
            { props.type==="password"?<img src="/assets/img/eye.png" style={{position:'absolute',right:'1rem',top:'1.1rem'}} />:
                <React.Fragment></React.Fragment>
            }
        </React.Fragment>
    );
};

export default DoubleRowInput;