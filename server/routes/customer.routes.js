const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  createCustomers,
  deleteAllCustomers,
  getCustomers,
  editCustomers,
  deleteCustomers,
} = require("../controllers/customer.controller");

router
  .route("/")
  .get(getAllCustomers)
  .post(createCustomers)
  .delete(deleteAllCustomers);
router
  .route("/:id")
  .get(getCustomers)
  .patch(editCustomers)
  .delete(deleteCustomers);

module.exports = router;
