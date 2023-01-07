import { ITechs } from "./../components/ListHabilities";
export interface ITechContext {
  technologies: ITechs[];
  setTechnologies: React.Dispatch<React.SetStateAction<ITechs[]>>;
  loaderTechs: boolean;
  setLoaderTechs: React.Dispatch<React.SetStateAction<boolean>>;
}
