const Sites = require("../models/Site");
const asyncHandler = require("../middleware/async");

// @desc    store data from params to database
// @route   GET /?u=www.site.ru&l=admin&p=password&m=some_message
// @access  public
exports.storeSiteDate = asyncHandler(async (req, res, next) => {
  const siteData = await Sites.create(req.params);

  res.status(200).json({ status: "success", data: siteData });
});
