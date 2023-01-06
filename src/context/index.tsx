import { LoadingProvider } from "./LoadingContext/LoadingContext";
import { ProjectProvider } from "./ProjectContext/ProjectsContext";
import { TechProvider } from "./TechContext/TechContext";

import { IChildren } from "../features/interfaces/global/globalInterfaces";

export const AllContexts = ({ children }: IChildren) => {
  return (
    <LoadingProvider>
      <ProjectProvider>
        <TechProvider>{children}</TechProvider>
      </ProjectProvider>
    </LoadingProvider>
  );
};
