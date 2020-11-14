const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db');

const sites = require('./routes/sites');

//  Load env vars
dotenv.config({ path: "./config/config.env" });

//  Connect to database
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/", sites);

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT} port`);
});
