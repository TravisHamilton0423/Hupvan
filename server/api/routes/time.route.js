const express = require('express');
const timeCtrl = require('../controllers/time.controller');

const router = express.Router();

router.route('/')
  .get(timeCtrl.getCurrentTime);

module.exports = router;
