import React from 'react';
import styled from 'styled-components'

const OutLine = styled('div')`
    width: 2rem;
    height: 2rem;
    background-color: #3AA14A;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SuccessIcon = () => {
    return (
        <OutLine>
            <span className="fa fa-check" style={{color:'white'}}></span>
        </OutLine>
    );
};

export default SuccessIcon;