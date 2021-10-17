const { fetchReposData, fetchOpenIssuesByRepo } = require("../services/github.service.js")

async function getReposByOrg(req, res) {
    const { repo } = req.params;
    const fetchReposDataResponse = await fetchReposData(repo);
    res.json(fetchReposDataResponse)
}

async function issuesByRepo(req, res) {
    const { parentrepo, reponame } = req.params;
    const fetchOpenIssuesByRepoResponse = await fetchOpenIssuesByRepo(parentrepo, reponame);
    res.json(fetchOpenIssuesByRepoResponse)
}

module.exports = {
    getReposByOrg,
    issuesByRepo
}