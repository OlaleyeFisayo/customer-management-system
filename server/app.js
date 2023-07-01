require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/customer.routes");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

//middleware
app.use(express.json());
app.use(errorHandler);

//routes
app.get("/", (req, res) => {
  res.send("Hello, World!!!");
});
app.use("/api/customers", routes);
app.use(notFound);

const port = process.env.PORT;

const start = async () => {
  app.listen(
    port,
    console.log(`Server is running on http://localhost:${port}`)
  );
};

start();
