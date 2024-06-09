const Employee = require("../models/employee");

class EmployeeService {
  constructor() {}

  getAllEmployee() {
    console.log("getting all employees");
    const query = Employee.find();
    query.setOptions({ lean: true });
    query.collection(Employee.collection);
    return query.exec();
  }
}

module.exports = new EmployeeService();
