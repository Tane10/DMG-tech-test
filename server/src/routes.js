const express = require("express")
const { getReposByOrg, issuesByRepo } = require("./controllers/github.controller.js")


const router = express.Router();

router.get("/getrepos/:repo", getReposByOrg);

router.get("/getissues/:parentrepo/:reponame", issuesByRepo);

module.exports = router;


