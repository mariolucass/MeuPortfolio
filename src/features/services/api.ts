import axios from "axios";

const gitHubURL = "https://api.github.com/users";
export const apiGitHub = axios.create({
  baseURL: gitHubURL,
  timeout: 5000,
});

const mainURL = "  ";
export const apiMain = axios.create({
  baseURL: mainURL,
  timeout: 5000,
});
