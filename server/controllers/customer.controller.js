const asyncWrapper = require("../middleware/asyncWrapper");
const Customer = require("../models/customer.model");

const getAllCustomers = asyncWrapper(async (req, res) => {
  const customer = await Customer.find({});
  res.status(200).json({ customer });
});

const createCustomers = asyncWrapper(async (req, res) => {
  const { body } = req;
  const customer = await Customer.create(body);
  res.status(201).json({ status: "successful", customer });
});

const deleteAllCustomers = asyncWrapper(async (req, res) => {
  const customer = await Customer.deleteMany({});
  res.status(204).json({ customer });
});

const getCustomers = asyncWrapper(async (req, res) => {
  const { id: customerID } = req.params;
  const customer = await Customer.findById(customerID).exec();
  if (customer === null) {
    res.status(404).json({ msg: "Couldn't find a customer with this ID" });
  }
  res.status(200).json({ customer });
});

const editCustomers = asyncWrapper(async (req, res) => {
  const { id: customerID } = req.params;
  const { body } = req;
  const customer = await Customer.findByIdAndUpdate(customerID, body, {
    new: true,
    runValidators: true,
  });
  if (customer === null) {
    res.status(404).json({ msg: "Couldn't find a customer with this ID" });
  }
  res.status(201).json({ status: "successful", customer });
});

const deleteCustomers = asyncWrapper(async (req, res) => {
  const { id: customerID } = req.params;
  const customer = await Customer.findByIdAndDelete(customerID);
  if (customer === null) {
    res.status(404).json({ msg: "Couldn't find a customer with this ID" });
  }
  res.status(204).json({ customer });
});

module.exports = {
  getAllCustomers,
  createCustomers,
  deleteAllCustomers,
  getCustomers,
  editCustomers,
  deleteCustomers,
};
