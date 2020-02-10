const express = require("express");
const router = express.Router();
const EmployeeController = require('../../controllers/employeeController');


//API TO GET EMPLOYEE DETAILS from database
router.get("/all", EmployeeController.getAllEmployees);

//API /create to Insert Employee to the table in database
router.post("/create", EmployeeController.createEmployee);

module.exports = router;
