const database = require('../models/database');
const sqlQuery = require('../sql/sql');

exports.getAllEmployees = function (req, res, next) {
    try {
        // open the database
        let db = database.openDb()

        //Sql to get values from employees table
        let sql = sqlQuery.sql.getAllEmployeesSql;

        // All row only
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(500)
                    .json({
                        status: 'Error',
                        message: err.message
                    });
            } else {
                res.send(rows);
            }
        });
        database.closeDb(db)
    } catch (e) {
        res.status(500)
            .json({
                status: 'Error',
                message: e
            });
    }
};

exports.createEmployee = function (req, res, next) {
    try {
        // open the database
        let db = database.openDb()

        let insertSql = sqlQuery.sql.insertEmployeeSql;

        /******
         * Payload be like
         "id": 1,
         "firstName": "Shruthi",
         "lastName": "Sekar",
         "dob": "9/12/1994",
         "salary": "40000"
         ******/

        let id = req.body.id
        let firstName = req.body.firstName
        let lastName = req.body.lastName
        let dob = req.body.dob
        let salary = req.body.salary

        // Insert one row into the Employees table
        db.run(insertSql, [id, firstName, lastName, dob, salary], function (err) {
            if (err) {
                res.status(500)
                    .json({
                        status: 'Error',
                        message: err.message
                    });
                return;
            }
            // get the last insert id
            res.send(`A row has been inserted with rowid ${this.lastID}`)
        });

        database.closeDb(db)
    } catch (e) {
        res.status(500)
            .json({
                status: 'Error',
                message: e
            });
    }
};
