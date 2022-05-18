import React from 'react';
import BorderedTitle from '../components/BorderedTitle';
import StorageElement from './components/StorageElement';

const SecondStorage = (props) => {
    return (
        <div className="col-sm-12 p-0 d-flex align-items-center flex-column">
            <div className="rem1-gap"></div>
            <div className="in-container">
                <BorderedTitle title="Select storage" />
                <div className="storages-list row">
                    { props.storages.map((storage,index) => (
                        <StorageElement key={index} id={'storage'+index} totstore={props.totstore} storage={storage} setStorage={props.setStorage} setStorehouse={props.setStorehouse} />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default SecondStorage;