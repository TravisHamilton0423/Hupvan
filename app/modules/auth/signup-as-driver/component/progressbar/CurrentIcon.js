import React from 'react';
import styled from 'styled-components'

const OutLine = styled('div')`
    width: 2rem;
    height: 2rem;
    border: 1px solid #31AA45;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InLine = styled('div')`
    width: 1.15rem;
    height: 1.15rem;
    background-color: #F2B327;
    border-radius: 50%;
`

const CurrentIcon = () => {
    return (
        <OutLine>
            <InLine></InLine>
        </OutLine>
    );
};

export default CurrentIcon;