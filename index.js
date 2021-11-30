const chalk = require('chalk');
const moment = require('moment-timezone');
const noStack = [401, 403, 404, 423];

module.exports = async (ctx, next) => {
  const time = moment().format('MM/DD/YYYY hh:mm:ss A');
  const method = chalk.bold(ctx.method);
  const ip = chalk.bold(ctx.ip.replace(/^::ffff:/, ''));
  //wait for route to finish, if the route throws an error we will catch it below
  try {
    await next();
    console.log(chalk`{green.bold OK} ${time} ${chalk.green.bold(ctx.status)} ${method} ${ctx.originalUrl} (${ip})`); //if the route doesnt error log the ok message
  } catch (err) {
    ctx.status = err.status || 500; //set status
    ctx.body = err.message + '\n'; //set body
    const message = noStack.includes(ctx.status) ? err.message : err.stack + '\n';
    console.log(chalk`{red.bold ERROR} ${time} ${chalk.red.bold(ctx.status)} ${method} ${ctx.originalUrl} (${ip}) ${message}`); //if the route errors log the error message
  }
};
