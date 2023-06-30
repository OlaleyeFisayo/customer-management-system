const getAllCustomer = (req, res) => {
  res.send("Get all customers");
};

const createCustomer = (req, res) => {
  res.send("created new customer");
};

const deleteAllCustomer = (req, res) => {
  res.send("deleted all customers");
};

const getSingleCustomer = (req, res) => {
  res.send("Get customer");
};

const editCustomer = (req, res) => {
  res.send("edit customer");
};

const deleteCustomer = (req, res) => {
  res.send("delete customers");
};

module.exports = {
  getAllCustomer,
  createCustomer,
  deleteAllCustomer,
  getSingleCustomer,
  editCustomer,
  deleteCustomer,
};
