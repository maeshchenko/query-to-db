const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: req.query,
  })
});

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT} port`);
});
