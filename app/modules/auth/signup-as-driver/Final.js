import React from 'react';
import LastFooter from '../../app/components/LastFooter'
import Link from 'react-router-dom/Link';

const DriverFinal = () => {
    return (
        <div className="modal-view">
            <div className="main-content">
                <Link className="close-icon" to="/">&times;</Link>
                <div className="logo-wrapper">
                    <Link className="navbar-brand logo-link" to="/">Hup<span>van</span></Link>
                </div>
            </div>
            <div className="modal-wrapper big">
                <div className="modal-inner">
                    <div style={{textAlign:'center',fontSize:'1.6rem',color:'#31AA45',marginTop:'3.5rem'}}>Thanks for signing up!</div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <div style={{textAlign:'center',fontSize:'1.2rem',color:'#444444',margin:'2.5rem 0rem'}} className="col-sm-5">
                            We will contact you once we have reviewed your application.</div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',position:'relative'}}>
                        <img src="/assets/img/success.png" style={{width:'85%',height:'100%'}} />
                        <div style={{position:'absolute',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',
                                left:'0rem',top:'0rem',width:'100%',height:'100%'}}>
                            <div style={{color:'#444444'}}>Need help?</div>
                            <div style={{color:'#31AA45',fontSize:'1.1rem'}}>support@hupvan.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <LastFooter />
        </div>
    );
};

export default DriverFinal;