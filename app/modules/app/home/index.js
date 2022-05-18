import React from 'react';
import BannerLanding from './components/BannerLanding'
import Link from 'react-router-dom/Link';

const Home = () => {
    return (
        <div className="main-content">
            <BannerLanding />
            <section className="body">
                <div className="container landing">

                    <div className="search-box">
                        <div className="d-flex">
                            <div className="pickup">
                                <input className="form-control form-control-lg" type="text" placeholder="Pickup address" />
                                <img src="/assets/img/map-marker.png" alt="Marker" width="30" height="40" />
                            </div>
                            <div className="destination">
                                <input className="form-control form-control-lg" type="text" placeholder="Destination address" />
                                <img src="/assets/img/map-marker.png" alt="Marker" width="30" height="40" />
                            </div>
                            <div className="action">
                                <button type="button" className="btn btn-action">Search</button>
                            </div>
                        </div>
                    </div>

                    <div className="services mt-5 mb-5">
                        <div className="text-center">
                            <h3 className="mb-4 font-weight-bold">
                                What are you moving?
                                </h3>
                            <p className="desc">
                                All of our service include 2 trained movers that load and upload, protective covering and insurance cover.
                                </p>
                        </div>

                        <div className="container">
                            <div className="row main-services mt-5 mb-5">
                                <div className="col-md-4 mb-3">
                                    <div className="card toggler selected" data-group="service">
                                        <div className="card-img-wrapper">
                                            <img src="/assets/img/home.png" className="card-img" alt="home" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Home</h5>
                                            <p className="card-text">Prepare everything from our app, we do the rest. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card toggler" data-group="service">
                                        <div className="card-img-wrapper">
                                            <img src="/assets/img/office.png" className="card-img" alt="office" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Office</h5>
                                            <p className="card-text">Prepare everything from our app, we do the rest. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card toggler" data-group="service">
                                        <div className="card-img-wrapper">
                                            <img src="/assets/img/stuff.png" className="card-img" alt="stuff" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Stuff</h5>
                                            <p className="card-text">Prepare everything from our app, we do the rest. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="blank-line"></div>

                        <div className="other-services mt-5 mb-10">
                            <h4 className="text-center mb-5">Explore other services from Hupvan</h4>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="misc-service mb-3">
                                        <img src="/assets/img/storage.png" alt="Storage" />
                                        {' '}<span>Storage</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="misc-service mb-3">
                                        <img src="/assets/img/skip-hire.png" alt="Skip Hire" />
                                        {' '}<span>Skip Hire</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="misc-service mb-3">
                                        <img src="/assets/img/rubbish.png" alt="Rubbish" />
                                        {' '}<span>Rubbish</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="storages-nearby mt-5 mb-5">
                        <div className="container">
                            <div className="clearfix mb-3">
                                <div className="float-left">
                                    <h3 className="font-weight-bold">Storages near you</h3>
                                    <em>See storage options around you</em>
                                </div>
                                <div className="float-right">
                                    <Link to='/storages' className="btn-tiny">View all</Link>
                                </div>
                            </div>
                            <div className="storages-list row">
                                <div className="col-md-3 mb-3 mb-sm-4">
                                    <div className="storage">
                                        <div className="storage-thumb">
                                            <img src="/assets/img/storage/safeforce.png" />
                                            <div className="storage-rating">
                                                {' '}<span className="star"></span>
                                                {' '}<span className="rating">
                                                    <i className="fa fa-star"></i>&nbsp;4.6</span>
                                            </div>
                                        </div>
                                        <div className="storage-info">
                                            <h5>Safestore</h5>
                                            <div className="storage-info-detail clearfix">
                                                <div className="float-left distance">
                                                    <img src="/assets/img/clock.png" width="20" height="20" alt="Distance in minutes" />
                                                    {' '}<span className="away">
                                                        {' '}<span className="label">Mins away</span>
                                                        {' '}<span className="minutes">21</span>
                                                    </span>
                                                </div>
                                                <div className="float-right price">
                                                    {' '}<span className="price-label">From</span>
                                                    {' '}<span>59</span>
                                                    {' '}<span>$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3 mb-sm-4">
                                    <div className="storage">
                                        <div className="storage-thumb">
                                            <img src="/assets/img/storage/henfield.png" />
                                            <div className="storage-rating">
                                                {' '}<span className="star"></span>
                                                {' '}<span className="rating">
                                                    <i className="fa fa-star"></i>&nbsp;4.8</span>
                                            </div>
                                        </div>
                                        <div className="storage-info">
                                            <h5>henfield storage</h5>
                                            <div className="storage-info-detail clearfix">
                                                <div className="float-left distance">
                                                    <img src="/assets/img/clock.png" width="20" height="20" alt="Distance in minutes" />
                                                    {' '}<span className="away">
                                                        {' '}<span className="label">Mins away</span>
                                                        {' '}<span className="minutes">25</span>
                                                    </span>
                                                </div>
                                                <div className="float-right price">
                                                    {' '}<span className="price-label">From</span>
                                                    {' '}<span>200</span>
                                                    {' '}<span>$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3 mb-sm-4">
                                    <div className="storage">
                                        <div className="storage-thumb">
                                            <img src="/assets/img/storage/lego.png" />
                                            <div className="storage-rating">
                                                {' '}<span className="star"></span>
                                                {' '}<span className="rating">
                                                    <i className="fa fa-star"></i>&nbsp;4.6</span>
                                            </div>
                                        </div>
                                        <div className="storage-info">
                                            <h5>The LEGOLAND Adventure</h5>
                                            <div className="storage-info-detail clearfix">
                                                <div className="float-left distance">
                                                    <img src="/assets/img/clock.png" width="20" height="20" alt="Distance in minutes" />
                                                    {' '}<span className="away">
                                                        {' '}<span className="label">Mins away</span>
                                                        {' '}<span className="minutes">29</span>
                                                    </span>
                                                </div>
                                                <div className="float-right price">
                                                    {' '}<span className="price-label">From</span>
                                                    {' '}<span>109</span>
                                                    {' '}<span>$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mb-3 mb-sm-4">
                                    <div className="storage">
                                        <div className="storage-thumb">
                                            <img src="/assets/img/storage/uk-storage.png" />
                                            <div className="storage-rating">
                                                {' '}<span className="star"></span>
                                                {' '}<span className="rating">
                                                    <i className="fa fa-star"></i>&nbsp;4.6</span>
                                            </div>
                                        </div>
                                        <div className="storage-info">
                                            <h5>UK Storage</h5>
                                            <div className="storage-info-detail clearfix">
                                                <div className="float-left distance">
                                                    <img src="/assets/img/clock.png" width="20" height="20" alt="Distance in minutes" />
                                                    {' '}<span className="away">
                                                        {' '}<span className="label">Mins away</span>
                                                        {' '}<span className="minutes">18</span>
                                                    </span>
                                                </div>
                                                <div className="float-right price">
                                                    {' '}<span className="price-label">From</span>
                                                    {' '}<span>34.33</span>
                                                    {' '}<span>$</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="our-vans m-5">
                        <h3 className="mb-4 font-weight-bold">Our vans</h3>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="van">
                                    <img src="/assets/img/small-van.png" alt="Small Van" />
                                    <div className="text-center mt-3">
                                        <strong>Small Van</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="van">
                                    <img src="/assets/img/large-van.png" alt="Large Van" />
                                    <div className="text-center mt-3">
                                        <strong>Large Van</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="van">
                                    <img src="/assets/img/luton.png" alt="Luton Van" />
                                    <div className="text-center mt-3">
                                        <strong>Luton Van</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="apps">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/assets/img/app.png" className="app-bg" alt="Mobile App" />
                            </div>
                            <div className="col-md-6 app-desc">
                                <h3 className="font-weight-bold">Move fast and easy with our app</h3>
                                <p>Available on the App store and Google Play</p>
                                <div>
                                    <img src="/assets/img/app_store.png" className="app-store-logo" alt="App Store Logo" />{' '}
                                    <img src="/assets/img/google_play.png" className="google-play-logo" alt="Google Play Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;