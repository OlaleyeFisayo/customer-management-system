const express = require("express");
const app = express();
const routes = require("./routes/customer.routes");
require("dotenv").config();
const connectDB = require("./db/connect");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send(`Hello, World!!!`);
});
app.use("/api/customers", routes);

const port = process.env.PORT || 3000;

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}....`);
  });
};

start()
