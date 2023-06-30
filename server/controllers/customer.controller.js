const { Customer } = require("../models/customer.model");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllCustomer = asyncWrapper(async (req, res) => {
  const customer = await Customer.find({});
  res.status(200).json({ customer });
});

const createCustomer = asyncWrapper(async (req, res) => {
  const { body } = req;
  await Customer.create(body);
  res.status(201).send("Created Succesfully");
});

const deleteAllCustomer = asyncWrapper(async (req, res) => {
  await Customer.deleteMany({});
  res.status(204);
});

const getSingleCustomer = asyncWrapper(async (req, res) => {
  const { id: customerID } = req.params;
  const customer = await Customer.findById(customerID).exec();
  if (customer === null) {
    return res.status(404).send("Could not find the Customer with this ID");
  }
  res.status(200).json({ customer });
});

const editCustomer = asyncWrapper(async (req, res) => {
  const { body } = req;
  const { id: customerID } = req.params;
  await Customer.findByIdAndUpdate(customerID, body, {
    new: true,
    runValidators: true,
  });
  res.status(200).send("Edit successful");
});

const deleteCustomer = asyncWrapper(async (req, res) => {
  const { id: customerID } = req.params;
  await Customer.findByIdAndDelete(customerID);
  res.status(204);
});

module.exports = {
  getAllCustomer,
  createCustomer,
  deleteAllCustomer,
  getSingleCustomer,
  editCustomer,
  deleteCustomer,
};
