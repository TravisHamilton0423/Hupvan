import React from 'react';
import styled from 'styled-components'

const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0rem 1rem 2rem 1rem;
`

const Title = styled('div')`
    text-align: center;
    font-size: 2rem;
    color: #31AA45;
    margin: 2rem 0rem;
`

const ProgressBar = (props) => {
    return (
        <div>
            <Title>Book your move</Title>
            <Container>
                <div className="progress-button success">General information</div>
                <div className="line"></div>
                { props.current_state>=1? (
                    <div className="progress-button success">Additional information</div>
                ):(
                    <div className="progress-button not-success">Additional information</div>
                ) }
                <div className="line"></div>
                { props.current_state===2? (
                    <div className="progress-button success">Checkout</div>
                ):(
                    <div className="progress-button not-success">Checkout</div>
                ) }
            </Container>
        </div>
    );
};

export default ProgressBar;