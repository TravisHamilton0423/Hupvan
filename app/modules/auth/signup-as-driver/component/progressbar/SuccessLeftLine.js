import React from 'react';
import styled from 'styled-components'

const OutLine = styled('div')`
    width: 2.2rem;
    height: 2px;
    background-color: #3AA14A;
`

const SuccessLeftLine = () => {
    return (
        <div style={{display:'flex',alignItems:'center'}}>
            <OutLine></OutLine>
        </div>
    );
};

export default SuccessLeftLine;