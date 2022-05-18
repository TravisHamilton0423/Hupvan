/* eslint-disable no-console */

const chalk = require('chalk');
const ip = require('ip');
const config = require('./api/constants');

const divider = chalk.gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {

  info: (tag, info) => {
    console.log(`${chalk.green('[DBG]')} ${tag}`, info);
  },

  // Called whenever there's an error on the server we want to print
  error: (err) => {
    console.error(chalk.red('App Start Failed:'), err);
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host, tunnelStarted) => {
    // If the tunnel started, log that and the URL it's available at
    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green('✓')}`);
    }

    console.clear();
    console.log(`
${divider}
${chalk.green(`${config.APP.TITLE}✓`)}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
(tunnelStarted ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}` : '')}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },
};

module.exports = logger;
