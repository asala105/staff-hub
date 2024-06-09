const Department = require("../models/department");

class DepartmentService {
  constructor() {}
  async createDepartment(departmentName) {
    const newDepartment = new Department({
      name: departmentName,
    });
    const savedDepartment = await newDepartment.save();
    return savedDepartment;
  }

  async getAllDepartments(){
    const query = Department.find();
    query.setOptions({ lean: true });
    query.collection(Department.collection);
    return query.exec();
  }
}

module.exports = new DepartmentService();
