const axios = require("axios");

const BASE_URL = "https://api.github.com";



// Get repositories by org:
// <https://api.github.com/orgs/nodejs/repos>

// Get open issues by repository:
// <https://api.github.com/repos/nodejs/reponame/issues?state=open>

async function getReposByOrg(req, res) {
    res.send("repo")
}

async function issuesByRepo(req, res) {
    res.send("issues")
}

module.exports = {
    getReposByOrg,
    issuesByRepo
}