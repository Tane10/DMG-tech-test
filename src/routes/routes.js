const express = require("express");
const serveStaticHtml = require("../controller/serveStaticPage")


let router = express.Router();

router.get("/", serveStaticHtml);

module.exports = router