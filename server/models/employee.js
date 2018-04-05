var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  id: Number,
  name: String,
  lastName: String,
  entry: Number
});

var Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
