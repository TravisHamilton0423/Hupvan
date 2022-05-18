import React, {Component} from 'react';
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer'
import FormInput from './components/FormInput';
import FormRadio from './components/FormRadio';

class HupvanAccount extends Component {
    state = {
        current_radio_value: 'Storage',
    }
    onChange(name) {
        this.setState({
            current_radio_value: name
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div style={{ fontSize: '2rem', color: '#31AA45', textAlign: 'center', marginTop: '1.5rem' }}>Open a hupvan account</div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div className="col-sm-8">
                        <div style={{width:'100%',height:'1px',backgroundColor:'#D6D6D6',marginTop:'2.5rem'}}></div>
                        <div style={{color:'#31AA45',height:'1.4rem',paddingLeft:'1.5rem',marginTop:'1rem',
                                borderLeft:'2px solid #F2B327',marginBottom:'0.5rem'}}>
                            Tell about your business
                        </div>
                        <div className="row" style={{margin:'none'}}>
                            <div className="col-sm-6 padding-right-1.5">
                                <FormInput title="Name:" placeholder="Name" />
                            </div>
                            <div className="col-sm-6 padding-right-1.5">
                                <FormInput title="Company:" placeholder="Company" />
                            </div>
                        </div>
                        <div className="row" style={{margin:'none'}}>
                            <div className="col-sm-6 padding-right-1.5">
                                <FormInput title="Industry:" placeholder="Enter a number" />
                            </div>
                            <div className="col-sm-6 padding-right-1.5">
                                <FormInput title="Telephone:" placeholder="Enter phone number" />
                            </div>
                        </div>
                        <div className="row" style={{margin:'none'}}>
                            <div className="col-sm-6 padding-right-1.5">
                                <FormInput title="Email:" placeholder="Enter businees email" />
                            </div>
                            <div className="col-sm-6 padding-right-1.5">
                                <FormInput title="Website:" placeholder="Name" />
                            </div>
                        </div>
                        <div style={{width:'100%',height:'1px',backgroundColor:'#D6D6D6',marginTop:'2rem'}}></div>
                        <div style={{color:'#31AA45',height:'1.4rem',paddingLeft:'1.5rem',marginTop:'1rem',borderLeft:'2px solid #F2B327'}}>
                            Business category
                        </div>
                        <div className="row" style={{margin:'none',marginTop:'2rem'}}>
                            <FormRadio name="Storage" radioname="category" onChange={this.onChange.bind(this)} ischecked={this.state.current_radio_value==='Storage'} />
                            <FormRadio name="Van hire" radioname="category" onChange={this.onChange.bind(this)} ischecked={this.state.current_radio_value==='Van hire'} />
                            <FormRadio name="Equipment hire" radioname="category" onChange={this.onChange.bind(this)} ischecked={this.state.current_radio_value==='Equipment hire'} />
                            <FormRadio name="Other" radioname="category" onChange={this.onChange.bind(this)} ischecked={this.state.current_radio_value==='Other'} />
                        </div>
                        <div style={{marginTop:'2rem',color:'#4D4D4D'}}>
                            <div style={{marginLeft:'1rem',marginBottom:'1rem'}}>Short Bio:</div>
                            <textarea className="form-control" style={{width:'100%',height:'12rem',borderRadius:'1rem'}}>
                            </textarea>
                        </div>
                        <div style={{textAlign:'center',color:'#999999',marginTop:'5rem'}}>
                            By signing up, I accept the Hupvan <span style={{color:'#31AA45'}}>Terms of Service</span> and acknowledge the <span style={{color:'#31AA45'}}>Privacy Policy</span>.
                        </div>
                        <div className="text-center login-actions" style={{marginTop:'2rem',marginBottom:'5rem',display:'flex',justifyContent:'center'}}>
                            <button className="btn btn-primary d-block w-60" style={{border:'none'}}>
                                Complete
                            </button>
                        </div>
                    </div>
                </div>
                <Footer footer_style={1} />
            </div>
        );
    }
};

export default HupvanAccount;