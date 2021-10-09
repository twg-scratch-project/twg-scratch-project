const authRouter = require('./auth');
const apiRouter = require('./api');


module.exports = {api: apiRouter, auth: authRouter};