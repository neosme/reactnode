const express = require('express');
const router = express.Router();
var employeeRoutes = require('./employee/employee');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/employee', employeeRoutes);

module.exports = router;
