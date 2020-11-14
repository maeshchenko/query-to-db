const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({
  url: {
    type: "string",
  },
  login: {
    type: "string",
  },
  password: {
    type: "string",
  },
  message: {
    type: "string",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Site", SiteSchema);
