const express = require("express")
const { getReposByOrg, issuesByRepo } = require("./controllers/github.controller.js")


const router = express.Router();

router.get("/getrepos", getReposByOrg);

router.get("/getissues", issuesByRepo);

module.exports = router;


