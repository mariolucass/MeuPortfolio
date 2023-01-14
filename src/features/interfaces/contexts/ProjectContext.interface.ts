import { IProject } from "../database/ListProjects";

export interface IProjectContext {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  loaderProjects: boolean;
  setLoaderProjects: React.Dispatch<React.SetStateAction<boolean>>;
}
