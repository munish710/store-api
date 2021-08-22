const express = require("express");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to the Store API</h1> <a href="/api/v1/products">Product Route</a>`
  );
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log(`Server listening at port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
