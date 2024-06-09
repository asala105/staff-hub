const express = require("express");
const router = express.Router();
const DepartmentService = require("../services/department.service");

router.post("/department/", async function (req, res) {
  try {
    console.log(req.body)
    const { departmentName } = req.body;
    const department = await DepartmentService.createDepartment(departmentName);
    res.status(201).json(department);
  } catch (error) {
    console.error('Error creating department:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get("/departments/", async function (req, res) {
    try {
      const departments = await DepartmentService.getAllDepartments();
      res.status(201).json(departments);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

module.exports = router;
