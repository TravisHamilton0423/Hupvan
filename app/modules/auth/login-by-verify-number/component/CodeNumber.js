import React from 'react';

const CodeNumber = () => {
    const onChange = (e) => {
        if (e.target.value.length === 4){
            $('#fifth-number').show()
            $('#fifth-number').focus()
        }
    }
    const fifthKeyPress = (e) => {
        if (e.target.value.length === 0 && e.which === 8){
            $('#fifth-number').hide()
            $('#phone-number').focus()
        }
    }
    return (
        <div className="mb-4 ml-5 mr-5 align-center verify-final" style={{position:'relative'}}>
            <input type="text" id="fifth-number" maxLength="1" className="form-control fifth-number" onKeyDown={fifthKeyPress} />
            <input type="text" className="form-control letter-spacing-auto" maxLength="4" style={{height:'3rem',paddingLeft:'2.5rem'}}
                id="phone-number" name="phone-number" onChange={onChange} required />
            <div className="code-circle first-position"></div>
            <div className="code-circle second-position"></div>
            <div className="code-circle third-position"></div>
            <div className="code-circle fourth-position"></div>
        </div>
    );
};

export default CodeNumber;