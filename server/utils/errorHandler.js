

exports.axiosErrorHandler = function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response.data && error.response.data.errors) return { message: error.response.data.errors };
  } else {
    console.log('[ERROR] axios request:\n', error);
    return { message: 'CONNECTION_TO_AUTH_SERVICE_FAILED' };
  }
  console.log(error.config);
};
