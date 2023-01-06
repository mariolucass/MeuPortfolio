import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IChildren } from "../../features/interfaces/global/globalInterfaces";
import { IProjectContext } from "../../features/interfaces/contexts/ProjectContext.interface";

export const ProjectContext = createContext<IProjectContext>(
  {} as IProjectContext
);

export const ProjectProvider = ({ children }: IChildren) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {});

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
