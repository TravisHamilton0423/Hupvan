import React from 'react';
import styled from 'styled-components'

const Title = styled('div')`
    margin-left: 1.7rem;
    margin-right: 3rem;
    color: #666666;
`

const RadioBody = styled('div')`
    margin: 0.5rem 0.5rem 3rem 0.5rem;
    border-radius: 5px;
    background-color: #FAFAFA;
    display: flex;
    padding: 0rem 1rem;
`

const RadioButton = styled('div')`
    width: 50%;
    display: flex;
    align-items: center;
`

const RadioGroup = (props) => {
    const onChange = (e) => {
        props.onChange(e.target.name, e.target.value)
    }
    return (
        <div>
            <Title>{props.title}</Title>
            <RadioBody style={props.no_margin?{margin:'0px',border:'1px solid #d6d6d6'}:{display:'flex'}}>
                { props.data.map((value) => (
                    <RadioButton key={value}>
                        {
                            value === props.nowsel ? (
                                <input type="radio" id={value} name={props.name} value={value} style={{width:'1.2rem',opacity:'0.5',height:'1.2rem'}} onChange={(e)=>onChange(e)} checked />
                            ):(
                                <input type="radio" id={value} name={props.name} value={value} style={{width:'1.2rem',opacity:'0.5',height:'1.2rem'}} onChange={(e)=>onChange(e)} />
                            )
                        }
                        <label htmlFor={value} style={{marginTop:'0.6rem',marginLeft:'0.7rem',fontSize:'1rem',color:'#666666'}}>{value}</label>
                    </RadioButton>
                ))}
            </RadioBody>
        </div>
    );
};

export default RadioGroup;