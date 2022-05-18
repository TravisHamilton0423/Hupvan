import React from 'react';
import styled from 'styled-components'

const Container = styled('div')`
    padding-left: 2rem;
    margin-top: -0.8rem;
`

const RadioInput = styled('input')`
    width: 1.2rem;
    height: 1.2rem;
    opacity: 0.5;
`

const RadioLabel = styled('label')`
    margin-top: 0.6rem;
    margin-left: 0.7rem;
    font-size: 1rem;
    color: #666666;
`

const FormRadio = (props) => {
    return (
        <Container className="col-6">
            <div className="d-flex align-items-center">
                { props.ischecked ? (
                    <RadioInput type="radio" id={props.name} name={props.radioname} value={props.name} checked />
                ):(
                    <RadioInput type="radio" id={props.name} name={props.radioname} value={props.name} onChange={()=>{props.onChange(props.name)}} />
                )}
                <RadioLabel htmlFor={props.name}>
                    {props.name}
                </RadioLabel>
            </div>
        </Container>
    );
};

export default FormRadio;