const express = require('express');
const router = express.Router();
const {
  storeSiteDate
} = require("../controllers/sites");

router.route('/').get(storeSiteDate);

module.exports = router;
