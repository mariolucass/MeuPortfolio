import * as styled from "./styles";
import * as layouts from "../../layouts";

export const Projects = () => (
  <styled.Main>
    <layouts.Header />
    <h1>Front-End</h1>
    <layouts.ListProjectsFrontEnd />

    <h1>Back-End</h1>
    <layouts.ListProjectsBackEnd />
  </styled.Main>
);
