import { IProject } from "../database/ListProjects";

export interface IProjectContext {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}
