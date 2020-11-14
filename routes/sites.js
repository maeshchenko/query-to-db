const express = require('express');
const router = express.Router();
const {
  storeSiteData
} = require("../controllers/sites");

router.route('/').get(storeSiteDate);
