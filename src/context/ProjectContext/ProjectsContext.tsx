import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { IChildren } from "../../features/interfaces/global/globalInterfaces";
import { IProjectContext } from "../../features/interfaces/contexts/ProjectContext.interface";
import { IProject } from "../../features/interfaces/components/ListProjects";
import { apiGitHub } from "../../features/services/api";

export const ProjectContext = createContext<IProjectContext>(
  {} as IProjectContext
);

export const ProjectProvider = ({ children }: IChildren) => {
  const [projects, setProjects] = useState<IProject[]>([] as IProject[]);
  const [loaderProjects, setLoaderProjects] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const responseGitHub = await apiGitHub.get("/mariolucass/repos");
        setProjects(responseGitHub.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProjects();
  }, []);

  useEffect(() => {}, [loaderProjects]);

  return (
    <ProjectContext.Provider
      value={{ projects, setProjects, loaderProjects, setLoaderProjects }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
