
const express = require('express');
const cors = require('cors');
const authMiddleware = require('../../middlewares/authMiddleware');

/** Main Routes */
const authRoute = require('./auth.route');
const timeRoute = require('./time.route');
const databaseRoute = require('./database.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/time', authMiddleware, timeRoute);

/** Administration Routes */
router.use('/admin/databases', authMiddleware, databaseRoute);

module.exports = router;
