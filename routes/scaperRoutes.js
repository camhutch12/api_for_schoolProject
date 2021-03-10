const express = require('express');
const scrapeRoutes = require("../controller/scraperRoutes");
const router = express.Router();

router.post('/p',scrapeRoutes.postApi);
router.get('/p',scrapeRoutes.getApi);
module.exports = router;