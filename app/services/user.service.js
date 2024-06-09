const User = require("../models/user");

class UserService {
  constructor() {}

  getAllUsers() {
    console.log("getting all users");
    const query = User.find();
    query.setOptions({ lean: true });
    query.collection(User.collection);
    return query.exec();
  }
}

module.exports = new UserService();
