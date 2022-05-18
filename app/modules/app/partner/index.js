import React from 'react';

const Partner = () => {
    return (
        <div className="main-content">
            <section className="body landing-partner">
                <section className="banner text-center">
                    <h3 className="mb-5">
                        <img className="img-account" src="/assets/img/banner-account.png" alt="Support" />
                        Hupvan is powering a new end-to end innovation in logistics.
                    <img className="img-partner" src="/assets/img/banner-partner.png" alt="Support" />
                    </h3>
                    <button className="btn btn-trans btn-trans--white font-weight-bold">Open a Hupvan account</button>
                </section>

                <section className="revolution p-10">
                    <div className="container">
                        <h3 className="text-center mb-10">Become part of revolution.</h3>

                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="feature mt-10">
                                    <img src="/assets/img/customer-support.png" alt="Support" />
                                    <div>Connect with customers easily.</div>
                                </div>
                                <div className="feature">
                                    <img src="/assets/img/audiances.png" alt="Support" />
                                    <div>Reach wider audiances.</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="feature">
                                    <img src="/assets/img/partner.png" alt="Support" />
                                    <div>Sell your inventory directly on Hupvan.</div>
                                </div>
                                <div className="feature">
                                    <img src="/assets/img/phone.png" alt="Support" />
                                    <div>Manage your account seamlessly.</div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="quote">Hupvan connects you with your customers directly in breeze with our end-to end technology.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="industries p-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 text-right">
                                <h3 className="title mt-5">See<br /> industries</h3>
                            </div>
                            <div className="col-md-4">
                                <img className="img-industry" src="/assets/img/see-industries.png" alt="See industries" />
                            </div>
                            <div className="col-md-3 pt-10">
                                <div className="misc-service">
                                    <img src="/assets/img/storage.png" alt="Storage" />{' '}
                                    <span>Storage</span>
                                </div>
                                <div className="misc-service">
                                    <img src="/assets/img/skip-hire.png" alt="Skip Hire" />{' '}
                                    <span>Skip Hire</span>
                                </div>
                                <div className="misc-service">
                                    <img src="/assets/img/rubbish.png" alt="Rubbish" />{' '}
                                    <span>Rubbish</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="open-account p-10 text-center">
                    <h4 className="mb-4">
                        Reach customers unlike before, <strong>Hupvan</strong> will connect you to them seaemlessly.
                    <div className="img-decorator d-none d-sm-block">
                            <img src="/assets/img/waves.png" alt="Waves" />
                        </div>
                    </h4>
                    <button className="btn btn-trans btn-trans--thin">Open an account</button>
                </section>
            </section>
        </div>
    );
};

export default Partner;