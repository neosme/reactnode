exports.sql = {
    getAllEmployeesSql: `SELECT Id, FirstName, LastName, DOB, Salary FROM Employees`,
    insertEmployeeSql: `INSERT INTO Employees VALUES(?,?,?,?,?)`
}
