const asyncWrapper = require("../middleware/asyncWrapper")

const getAllCustomers = asyncWrapper(async (req, res) => {
    res.send("Get all customers")
})

const createCustomers = asyncWrapper(async (req, res) => {
    res.send("Created customers")
})

const deleteAllCustomers = asyncWrapper(async (req, res) => {
    res.send("Deleted all customers")
})

const getCustomers = asyncWrapper(async (req, res) => {
    res.send("Get customers")
})

const editCustomers = asyncWrapper(async (req, res) => {
    res.send("Edited customer")
})

const deleteCustomers = asyncWrapper(async (req, res) => {
    res.send("Deleted customer")
})

module.exports = {
    getAllCustomers,
    createCustomers,
    deleteAllCustomers,
    getCustomers,
    editCustomers,
    deleteCustomers
}