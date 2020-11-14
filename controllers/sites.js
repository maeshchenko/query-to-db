const Sites = require("../models/Site");
const asyncHandler = require("../middleware/async");

// @desc    store data from params to database
// @route   GET /?url=www.site.ru&login=admin&password=password&message=this is some message
// @access  public
exports.storeSiteDate = asyncHandler(async (req, res, next) => {
  const siteData = await Sites.create(req.query);

  res.status(200).json({ status: "success!", data: siteData });
});
