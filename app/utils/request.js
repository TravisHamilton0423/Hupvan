import 'whatwg-fetch';
import moment from 'moment';
import { setAPILoading, setGlobalNotification } from 'containers/App/redux/actions';
import { logout } from 'modules/auth/redux/actions';
import { getStore } from '../configureStore';
import * as CONSTANT from './constants';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status === 403) {
    logout();
    return;
  }

  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, method = 'GET', body = null, includeToken = false, isAPI = true, requestport, successFunc = null, opt) { // eslint-disable-line

  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  const store = getStore();
  const port = requestport || CONSTANT.PORT || 7000;
  const isInternal = port === CONSTANT.PORT;
  let requestUrl = CONSTANT.URL;

  if (opt) Object.assign(options, opt);

  store.dispatch(setAPILoading(true));

  if (port) {
    requestUrl += `:${port}`;
  }

  if (isAPI && url) {
    requestUrl = isInternal ? `${requestUrl}/api/${url}` : url;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  if (includeToken && !options.headers.authorization) {
    const storage = store.getState();
    const currentUser = storage && storage.auth && storage.auth.currentUser;
    const token = currentUser && currentUser.token;
    const roleUid = currentUser && currentUser.role;
    // options.headers.authorization = `${roleUid}?${token}`;
    options.headers.authorization = `token ${token}`;
  }

  return fetch(requestUrl, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((resp) => {
      store.dispatch(setAPILoading(false));
      if (successFunc && typeof successFunc === 'function') {
        successFunc();
      }
      return resp;
    })
    .catch((err) => {
      if (isInternal) {
        if (err.response) {
          err.response.json()
            .then((json) => {
              if (json && json.message) {
                store.dispatch(setGlobalNotification('Error', json.message));
              }
            });
        } else {
          // store.dispatch(setGlobalNotification('API Error', err && err.message ? err.message : 'Unknown error'));
        }
        store.dispatch(setAPILoading(false));
        throw err;
      }
    });
}

/**
 * Send the FormData to the API
 *
 * @export
 * @param {any} url API URL
 * @param {any} form FormData
 * @param {boolean} [includeToken=false] whether header includes authorization token
 * @param {boolean} [isAPI=true] send data whether API or not
 * @param {any} requestport API port
 */
export function requestForm(url, form, includeToken = false, isAPI = true, requestport) {
  const store = getStore();
  const port = requestport || CONSTANT.PORT || 7000;
  const isInternal = port === CONSTANT.PORT;
  let requestUrl = CONSTANT.URL;

  store.dispatch(setAPILoading(true));

  if (port) {
    requestUrl += `:${port}`;
  }

  if (isAPI && url) {
    requestUrl = isInternal ? `${requestUrl}/api/${url}` : url;
  }

  return new Promise(((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', requestUrl, true);

    if (includeToken) {
      const storage = store.getState();
      const currentUser = storage && storage.auth && storage.auth.currentUser;
      const token = currentUser && currentUser.token;
      const roleUID = currentUser && currentUser.role;
      xhr.setRequestHeader('authorization', `${roleUID}?${token}`);
    }

    xhr.onload = function (e) {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(xhr.status);
      }
    };
    xhr.send(form);
  }));
}
