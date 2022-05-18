import React from 'react';
import styled from 'styled-components';

const Title = styled('div')`
    border-left: 3px solid #F2B327;
    height: 1.7rem;
    font-size: 1.2rem;
    padding-left: 1rem;
    color: #31AA45;
`

const BorderedTitle = (props) => {
    return (
        <Title>
            {props.title}
        </Title>
    );
};

export default BorderedTitle;