import React from 'react';
import styled from 'styled-components'

const OutLine = styled('div')`
    width: 2rem;
    height: 2rem;
    border: 1px solid #3AA14A;
    border-radius: 50%;
`

const NotSuccessIcon = () => {
    return (
        <OutLine></OutLine>
    );
};

export default NotSuccessIcon;