import axios from "axios";

const GitHubURL = "https://api.github.com/users";
const VercelUrl = "https://api.vercel.com";

export const apiGitHub = axios.create({
  baseURL: GitHubURL,
  timeout: 5000,
});

export const apiVercel = axios.create({
  baseURL: VercelUrl,
  timeout: 5000,
});
