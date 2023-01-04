import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IChildren } from "../../features/interfaces/globalInterfaces";

export const TechContext = createContext<ITechContext>({} as ITechContext);

interface ITechContext {}

export const TechProvider = ({ children }: IChildren) => {
  const [technologies, setTechnologies] = useState([]);

  return (
    <TechContext.Provider value={{ technologies, setTechnologies }}>
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => {
  return useContext(TechContext);
};
