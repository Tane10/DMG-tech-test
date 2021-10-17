const BASE_URL = "http://localhost:8000/api";

export async function getRepos(): Promise<any> {
  const repoData = await fetch(`${BASE_URL}/getrepos`);
  return repoData.json();
}

export async function getIssues(): Promise<any> {
  const openIssuesData = await fetch(`${BASE_URL}/getissues`);
  return openIssuesData.json();
}
