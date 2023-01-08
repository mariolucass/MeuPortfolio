import * as styled from "./styles";
import * as layouts from "../../layouts";
import { useEffect } from "react";
import { apiGitHub } from "../../services/api";
import * as components from "../../../components";
import { useProjectContext } from "../../../context/ProjectContext/ProjectsContext";

export const Projects = () => {
  const { setProjects } = useProjectContext();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const responseGitHub = await apiGitHub.get("/mariolucass/repos");
        setProjects(responseGitHub.data);
        console.log(responseGitHub.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProjects();
  }, []);

  return (
    <styled.Main>
      <layouts.Header />

      <layouts.LoadingsProducer>
        <components.ListProjects />
      </layouts.LoadingsProducer>
    </styled.Main>
  );
};
