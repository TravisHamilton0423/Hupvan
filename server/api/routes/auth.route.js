const express = require('express');
const authCtrl = require('../controllers/auth.controller');

const router = express.Router();

router.route('/login')
  .post(authCtrl.login);

router.route('/signup')
  .post(authCtrl.signup);

// router.route('/currentTime')
//   .get(authCtrl.getTime);

// router.param('id', authCtrl.getUserByID);

module.exports = router;
