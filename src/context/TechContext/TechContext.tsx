import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { IChildren } from "../../features/interfaces/global/globalInterfaces";
import { ITechContext } from "../../features/interfaces/contexts/TechContext.interface";
import { api } from "../../features/services/api";
import { ITechs } from "../../features/interfaces/components/ListHabilities";

export const TechContext = createContext<ITechContext>({} as ITechContext);

export const TechProvider = ({ children }: IChildren) => {
  const [technologies, setTechnologies] = useState<ITechs[]>([] as ITechs[]);
  const [loaderTechs, setLoaderTechs] = useState(false);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await api.get("/techs");
        console.log(response.data);
        setTechnologies(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadTechnologies();
  }, []);

  useEffect(() => {}, [loaderTechs]);

  return (
    <TechContext.Provider
      value={{ technologies, setTechnologies, loaderTechs, setLoaderTechs }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => {
  return useContext(TechContext);
};
