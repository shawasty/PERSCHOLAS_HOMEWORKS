const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Employee_address = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  _id: {type:String,required:false},
});

const Employee = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    job_title: { type: String, required: true },
    address: Employee_address,
  },
  { timestamps: true }
);

module.exports = mongoose.model("employees", Employee);
