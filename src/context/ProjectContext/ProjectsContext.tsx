import { createContext, useContext, useEffect, useState } from "react";

import { IChildren } from "../../features/interfaces/global/globalInterfaces";
import { IProjectContext } from "../../features/interfaces/contexts/ProjectContext.interface";
import { IProject } from "../../features/interfaces/database/ListProjects";

import { apiGitHub } from "../../features/services/api";
import { Projects } from "../../features/database";

export const ProjectContext = createContext<IProjectContext>(
  {} as IProjectContext
);

export const ProjectProvider = ({ children }: IChildren) => {
  const [projects, setProjects] = useState<IProject[]>([] as IProject[]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const responseGitHub = await apiGitHub.get("/mariolucass/repos");
        setProjects(
          responseGitHub.data.filter(
            (elem: any) => !Projects.listHidden.includes(elem.name)
          )
        );
      } catch (error) {}
    };
    loadProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
