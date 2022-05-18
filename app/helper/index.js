
import React from 'react';
import { Input, FormGroup } from 'reactstrap';
import moment from 'moment';
import swal from 'sweetalert';
import _ from 'lodash';

export const isFieldRequired = value =>
  (value ? undefined : '암호확인이 정확치 않습니다.');

export const renderField = ({
  input,
  label,
  type,
  name,
  meta: { touched, error, warning }
}) => (
  <FormGroup color={touched && error ? 'danger' : ''}>
    <div className="col-xs-12">
      <div className="form-material form-material-primary floating login-form">
        <Input {...input} type={type} name={name} className="form-control login-input-form" />
        <label htmlFor={name} className="login-form"> {label} </label>
        { <div><div style={{ color: '#ff0000', height: 30 }}>{touched ? error : ''}</div></div>}
      </div>
    </div>
  </FormGroup>
);

export const formatISODate = date => (date ? moment(date).format('YYYY-MM-DD') : '----.--.--');

export const isNumber = number => number && isNaN(parseInt(number)) === false;
/**
 * Convert the number into role of national politics
 * @param {*} number
 */
export const formatInteger = (number) => {
  if (isNumber(number) === false) return '--';

  if (number <= 999) return number;

  let isThree = 3;
  let strNum = '';
  const letterArr = parseInt(number).toString().split('').reverse();

  for (const l of letterArr) {
    if (!isThree) {
      isThree = 3;
      strNum += ' ';
    }

    strNum += l;
    isThree--;
  }

  return strNum.split('').reverse().join('');
};

export const formatFloat = (number, precitive) => number && parseFloat(number).toFixed(precitive || 2);

export const sweetAlertConfirm = (options, callback) => {
  const defaultOptions = {
    title: 'Are you sure?',
    text: null,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#DD6B55',
    confirmButtonText: '예',
    cancelButtonText: '아니오',
    closeOnConfirm: true,
  };

  swal(Object.assign(defaultOptions, options), callback);
};

export const textBreakToBr = text => text.replace(/\n/ig, '<br/>');
