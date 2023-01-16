import { createContext, useContext, useEffect, useState } from "react";

import { IChildren } from "../../features/interfaces/global/globalInterfaces";
import { ILoadingContext } from "../../features/interfaces/contexts/LoadingContext";

export const LoadingContext = createContext<ILoadingContext>(
  {} as ILoadingContext
);

export const LoadingProvider = ({ children }: IChildren) => {
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 450);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading((loading) => !loading);
    }, 100);
  }, [loader]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  return useContext(LoadingContext);
};
