import React from 'react';
import styled from 'styled-components'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    bookRequestDataSet,
} from '../redux/actions'

const MenuItem = styled('div')`
    min-width: 7rem;
    min-height: 7rem;
    border: 1px solid #D6D6D6;
    border-radius: 10px;
    color: #31AA45;
    font-size: 1.1rem;
    margin: 1.4rem;
    cursor: pointer;
`

const FixedSizeImageDiv = styled('div')`
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FixedSizeImage1 = styled('img')`
    width: 100%;
    height: auto;
`

const FixedSizeImage2 = styled('img')`
    height: 100%;
    width: auto;
`

const MovingMenu = (props) => {
    const onClick = () => {
        // if(props.currentType !== props.name){
        //     props.setData({})
        //     props.bookRequestDataSet({}, 1)
        // }
        props.selectMenu(props.name)
    }
    return (
        <MenuItem className="align-center" style={props.is_me?{border:'2px solid #31AA45'}:{cursor:'pointer'}} onClick={()=>onClick()}>
            <div className="d-flex flex-column align-items-center">
                <FixedSizeImageDiv>
                    { props.flag === 0?(
                        <FixedSizeImage1 src={props.imgUrl} />
                    ):(
                        <FixedSizeImage2 src={props.imgUrl} />
                    )}
                </FixedSizeImageDiv>
                <div>{props.name}</div>
            </div>
        </MenuItem>
    );
};

const mapStateToProps = (store) => ({
    currentType: store.app.book.currentType,
});

const mapDispatchToProps = {
    bookRequestDataSet,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(compose(
    withConnect,
  )(MovingMenu))