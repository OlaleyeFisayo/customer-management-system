const { Schema, model } = require("mongoose");

const CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please provide the first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide the last name"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Please provide the customers Date of birth"],
  },
  email: {
    type: String,
    required: [true, "Please provide the email"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide the number"],
    max: [15, "That is too long for a phone number"],
  },
  bankAccountNumber: {
    type: Number,
    required: [true, "Please provide the account"],
  },
});

const Customer = model("Customer", CustomerSchema);

module.exports = {
  Customer,
};
