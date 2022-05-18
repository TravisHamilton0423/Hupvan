import React from 'react';
import styled from 'styled-components'

const ItemBody = styled('div')`
    width: auto;
    background-color: #FAFAFA;
    margin: 0rem 0.5rem;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.08);
    padding: 16px 20px;
    color: #666666;
    align-items: center;
    display: flex;
`

const ItemBottom = styled('div')`
    display: flex;
    background-color: white;
    justify-content: space-around;
    margin: 0rem 0.5rem 2.5rem 0.5rem;
    padding: 0.6rem 0.8rem;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.08);
`

const DocumentButton = styled('div')`
    height: 1.6rem;
    width: 45%;
    border: 1px solid #D6D6D6;
    border-radius: 0.75rem;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const image_src = ['/assets/img/pen.png','/assets/img/calender.png']

const DocumentItem = (props) => {
    return (
        <div>
            <ItemBody style={props.data?{borderRadius:'5px 5px 0px 0px'}:{borderRadius:'5px',marginBottom:'2.5rem'}}>
                <div style={{flex:'9'}}>
                    <div style={{fontSize:'18px',marginBottom:'0.5rem'}}>{props.title}</div>
                    <div style={{fontSize:'12px'}}>{props.text}</div>
                </div>
                <div style={{flex:'1',display:'flex',justifyContent:'center',padding:'0.4rem',border:'1px dashed #B8B8B8'}}>
                    <img src="/assets/img/file-plus.png" style={{width:'1.6rem',height:'2rem'}} />
                </div>
            </ItemBody>
            { props.data? (
                <ItemBottom>
                    {  props.data.map((item,index) => (
                        <DocumentButton key={item}>
                            {item}
                            <img src={image_src[index]} style={{position:'absolute',right:'0.6rem'}} />
                        </DocumentButton>
                    ))}
                </ItemBottom>
            ):(
                <React.Fragment></React.Fragment>
            )}
        </div>
    );
};

export default DocumentItem;