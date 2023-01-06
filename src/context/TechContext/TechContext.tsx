import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { IChildren } from "../../features/interfaces/global/globalInterfaces";
import { ITechContext } from "../../features/interfaces/contexts/TechContext.interface";

export const TechContext = createContext<ITechContext>({} as ITechContext);

export const TechProvider = ({ children }: IChildren) => {
  const [technologies, setTechnologies] = useState([]);
  const [loaderTechs, setLoaderTechs] = useState(false);

  useEffect(() => {});

  useEffect(() => {}, [loaderTechs]);

  return (
    <TechContext.Provider value={{ technologies, setTechnologies }}>
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => {
  return useContext(TechContext);
};
