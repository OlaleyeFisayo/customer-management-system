const express = require("express");
const app = express();
const routes = require("./routes/customer.routes");
require("dotenv").config();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send(`Hello, World!!!`);
});
app.use("/api/customers", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
