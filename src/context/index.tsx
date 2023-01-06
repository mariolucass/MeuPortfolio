import { IChildren } from "../features/interfaces/global/globalInterfaces";
import { LoadingProvider } from "./LoadingContext/LoadingContext";
import { ProjectProvider } from "./ProjectContext/ProjectsContext";
import { TechProvider } from "./TechContext/TechContext";
export { useTechContext } from "./TechContext/TechContext";
export { useProjectContext } from "./ProjectContext/ProjectsContext";

export const AllContexts = ({ children }: IChildren) => {
  return (
    <LoadingProvider>
      <ProjectProvider>
        <TechProvider>{children}</TechProvider>
      </ProjectProvider>
    </LoadingProvider>
  );
};
