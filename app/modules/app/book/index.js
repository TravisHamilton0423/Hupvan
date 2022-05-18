import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import BookGeneral from './general';
import BookAdditional from './additional';
import Redirect from 'react-router-dom/Redirect';
import Checkout from './checkout';

const Book = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/book/general" component={BookGeneral} />
                <Route exact path="/book/additional" component={BookAdditional} />
                {/* <Route exact path="/book/additional/storage" component={SecondStorage} /> */}
                <Route exact path="/book/checkout" component={Checkout} />

                <Route render={()=><Redirect to="/" />} />
            </Switch>
        </div>
    );
};

export default Book;