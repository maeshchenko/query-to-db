const express = require('express');
const router = express.Router();
const {
  storeSiteData,
  readSiteData
} = require("../controllers/sites");

router.route('/data').get(readSiteData);
router.route('/').get(storeSiteData);

module.exports = router;
