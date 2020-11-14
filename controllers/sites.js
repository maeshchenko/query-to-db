const Sites = require("../models/Site");
const asyncHandler = require("../middleware/async");

// @desc    store data from params to database
// @route   GET /?url=www.site.ru&login=admin&password=password&message=this is some message
// @access  public
exports.storeSiteData = asyncHandler(async (req, res, next) => {
  const siteData = await Sites.create(req.query);

  res.status(200).json({ status: "success", data: siteData });
});

// @desc    read data from database
// @route   GET /data
// @access  private
exports.readSiteData = asyncHandler(async (req, res, next) => {
  const sitesData = await Sites.find();

  res.status(200).json({ status: "success", count:sitesData.length, data: sitesData });
});
