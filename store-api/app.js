require("dotenv").config();
require("express-async-errors");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

// async errors
const express = require("express");
const app = express();

// middleware
app.use(express.json());

// routers
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">product route</a>');
});

app.use("/api/v1/products", productsRouter);

// products router

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
