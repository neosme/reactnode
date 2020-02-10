const sqlite3 = require('sqlite3').verbose();
const constant = require("../constants/constants");
const logger = require('../logger');

// open the database
module.exports.openDb = function () {
    return new sqlite3.Database(constant.constant.dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            logger.error(err.message);
            return err.message
        }
        logger.info('Connected to the database.');
    });
};

module.exports.closeDb = function (db) {
    db.close((err) => {
        if (err) {
            logger.error(err.message);
            return err.message
        }
        logger.info('Closed the database connection');
    });
};
