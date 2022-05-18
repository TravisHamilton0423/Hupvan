const express = require('express');
const databaseCtrl = require('../controllers/database.controller');

const router = express.Router();

router.route('/')
  .get(databaseCtrl.list)
  .post(databaseCtrl.create);

router.route('/:databaseId')
  .delete(databaseCtrl.remove)
  .put(databaseCtrl.restoreDatabase);

router.param('databaseId', databaseCtrl.getDatabaseByID);

module.exports = router;
