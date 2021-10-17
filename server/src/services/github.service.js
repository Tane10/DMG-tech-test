const BASE_URL = "https://api.github.com";
const axios = require("axios")

async function fetchReposData(repo) {
    try {
        const fetchReposByOrg = await axios.get(`${BASE_URL}/orgs/${repo}/repos`);
        return fetchReposByOrg.data

    } catch (error) {
        console.log(error)
    }

}
async function fetchOpenIssuesByRepo(parentRepo, repoName) {
    try {
        const fetchOpenIssues = await axios.get(`${BASE_URL}/repos/${parentRepo}/${repoName}/issues?state=open`);
        return fetchOpenIssues.data
    } catch (error) {
        console.log(error)

    }

}

module.exports = {
    fetchReposData,
    fetchOpenIssuesByRepo
}

// Get repositories by org:
// <https://api.github.com/orgs/nodejs/repos>

// Get open issues by repository:
// <https://api.github.com/repos/nodejs/reponame/issues?state=open>