import axios from "axios";

const gitHubURL = "https://api.github.com/users";
export const apiGitHub = axios.create({
  baseURL: gitHubURL,
  timeout: 5000,
});
