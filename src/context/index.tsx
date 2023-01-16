import { LoadingProvider } from "./LoadingContext/LoadingContext";
import { ProjectProvider } from "./ProjectContext/ProjectsContext";

import { IChildren } from "../features/interfaces/global/globalInterfaces";

export const AllContexts = ({ children }: IChildren) => (
  <LoadingProvider>
    <ProjectProvider>{children}</ProjectProvider>
  </LoadingProvider>
);
