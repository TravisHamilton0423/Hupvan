import swal from 'sweetalert';

export const defaultOptions = {
  text: null,
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#DD6B55',
  confirmButtonText: '예',
  cancelButtonText: '아니오',
  closeOnConfirm: true,
};

/**
 * Open the SweetAlert
 * @param {Object} options
 * @param {Function} callback
 */
export const sweetalert = (options, callback) => {
  swal({ ...defaultOptions, ...options }, (isConfirm) => {
    isConfirm && callback();
  });
};
