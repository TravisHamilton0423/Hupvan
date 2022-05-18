/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const argv = require('./argv');
const frontendSetup = require('./middlewares/frontendMiddleware');
const backendSetup = require('./middlewares/backendMiddleware');
const resolve = require('path').resolve;
const port = require('./port');

const app = express();
const http = require('http');
const path = require('path');

const server = http.createServer(app);

app.use(express.static('public'));
// backendSetup(app);

// In production we need to pass these values in instead of relying on webpack
frontendSetup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});


app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(500).send({ error: (err && err.message) || 'Something went wrong on the server' });
});


// get the intended host and port number, use localhost and port 5000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
server.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port, prettyHost);
});
