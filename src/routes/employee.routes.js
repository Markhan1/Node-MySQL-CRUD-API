const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employee.controller");

// Retrieve all employees
router.get('/', employeeController.findAll);

// Create a new employee
router.post('/', employeeController.create);

// Retrieve a single employee with id
router.get('/:id', employeeController.findById);

// Update an employee by id
router.patch('/:id', employeeController.update);

// Delete an employee by id
router.delete('/:id', employeeController.delete);

module.exports = router;