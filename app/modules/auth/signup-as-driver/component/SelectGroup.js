import React from 'react';
import styled from 'styled-components'

const Title = styled('div')`
    margin-left: 1.7rem;
    margin-right: 3rem;
    color: #666666;
`

const SelectBody = styled('select')`
    height: 2.55rem;
    margin: 0.5rem 0.5rem 3rem 0.5rem;
    border-radius: 5px;
    color: #B8B8B8;
    border: 1px solid #D6D6D6;
    background-color: #FAFAFA;
    padding: 0rem 1rem;
`

const SelectGroup = (props) => {
    const onChange = (e) => {
        props.onChange(e.target.name, e.target.value)
    }
    return (
        <div>
            <Title>{props.title}</Title>
            <SelectBody name={props.name} className="form-control" style={props.height?{height:props.height,width:'96%'}:{width:'96%'}}>
                { props.data.map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </SelectBody>
        </div>
    );
};

export default SelectGroup;