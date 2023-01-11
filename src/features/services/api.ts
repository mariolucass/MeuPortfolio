import axios from "axios";

const GitHubURL = "https://api.github.com/users";
export const apiGitHub = axios.create({
  baseURL: GitHubURL,
  timeout: 5000,
});
