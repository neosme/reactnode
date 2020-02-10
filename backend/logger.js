const myLoggers = require('log4js');

myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "./logger.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("default");

module.exports = logger;
