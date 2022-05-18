import React from 'react';
import styled from 'styled-components'

const Container = styled('div')`
    margin: 1rem 0rem;
`

const Title = styled('div')`
    margin-bottom: 0.5rem;
    color: #4D4D4D;
    margin-left: 0.8rem;
`

const BigInput = styled('input')`
    width: 100%;
    height: 3rem;
`

const FormInput = (props) => {
    return (
        <Container>
            <Title>{props.title}</Title>
            <BigInput className="form-control" placeholder={props.placeholder} />
        </Container>
    );
};

export default FormInput;