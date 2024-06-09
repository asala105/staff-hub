const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
});

module.exports = mongoose.model("User", UserSchema);
