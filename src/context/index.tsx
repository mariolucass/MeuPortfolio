import { LoadingProvider } from "./LoadingContext/LoadingContext";
import { ProjectProvider } from "./ProjectContext/ProjectsContext";

import { IChildren } from "../features/interfaces/global/globalInterfaces";

export const AllContexts = ({ children }: IChildren) => {
  return (
    <LoadingProvider>
      <ProjectProvider>{children}</ProjectProvider>
    </LoadingProvider>
  );
};
