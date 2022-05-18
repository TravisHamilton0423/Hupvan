import React from 'react';
import styled from 'styled-components'

const OutLine = styled('div')`
    width: 2.2rem;
    height: 2px;
    border: 1px dashed #3AA14A;
`

const NotSuccessLeftLine = () => {
    return (
        <div style={{display:'flex',alignItems:'center'}}>
            <OutLine></OutLine>
        </div>
    );
};

export default NotSuccessLeftLine;