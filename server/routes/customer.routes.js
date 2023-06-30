const express = require("express");
const router = express.Router();
const {
  getAllCustomer,
  createCustomer,
  deleteAllCustomer,
  getSingleCustomer,
  editCustomer,
  deleteCustomer,
} = require("../controllers/customer.controller");

router
  .route("/")
  .get(getAllCustomer)
  .post(createCustomer)
  .delete(deleteAllCustomer);
router
  .route("/:id")
  .get(getSingleCustomer)
  .patch(editCustomer)
  .delete(deleteCustomer);

module.exports = router;
