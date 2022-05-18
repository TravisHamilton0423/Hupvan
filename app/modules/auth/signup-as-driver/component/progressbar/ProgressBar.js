import React from 'react';
import SuccessIcon from './SuccessIcon';
import CurrentIcon from './CurrentIcon';
import NotSuccessIcon from './NotSuccessIcon';
import SuccessLeftLine from './SuccessLeftLine';
import NotSuccessLeftLine from './NotSuccessLeftLine';

const ProgressBar = (props) => {
    let success = [], left = [];
    for(let i = 0; i < props.current_index; i ++)
        success[i] = i;
    for(let i = props.current_index+1; i < 4; i ++)
        left[i] = i;
    return (
        <div style={{marginTop:'-2.5rem',marginBottom:'3rem',display:'flex',justifyContent:'center'}}>
            { success.map((index) => (
                <React.Fragment key={index}>
                    <SuccessLeftLine />
                    <SuccessIcon />
                </React.Fragment>
            ))}
            { props.current_index ? <SuccessLeftLine /> : <React.Fragment></React.Fragment> }
            <CurrentIcon />
            { left.map((index) => (
                <React.Fragment key={index}>
                    <NotSuccessLeftLine />
                    <NotSuccessIcon />
                </React.Fragment>
            ))}
            { props.current_index ? <NotSuccessLeftLine /> : <React.Fragment></React.Fragment> }
        </div>
    );
};

export default ProgressBar;