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
});

module.exports = mongoose.model("Site", SiteSchema);
