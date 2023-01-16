import { createContext, useContext, useEffect, useState } from "react";

import { IChildren } from "../../features/interfaces/global/globalInterfaces";
import { IProjectContext } from "../../features/interfaces/contexts/ProjectContext.interface";
import { IProject } from "../../features/interfaces/database/ListProjects";

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
        setProjects(
          responseGitHub.data.filter((elem: any) => {
            return elem.name !== "mariolucass" && elem.name !== "MeuPortfolio";
          })
        );
      } catch (error) {}
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
