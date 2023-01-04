import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IChildren } from "../../features/interfaces/globalInterfaces";

export const ProjectContext = createContext<IProjectContext>(
  {} as IProjectContext
);

interface IProjectContext {}

export const ProjectProvider = ({ children }: IChildren) => {
  const [projects, setProjects] = useState([]);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
