import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IChildren } from "../../features/interfaces/global/globalInterfaces";

export const LoadingContext = createContext<ILoadingContext>(
  {} as ILoadingContext
);
interface ILoadingContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingProvider = ({ children }: IChildren) => {
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);

  useState(() => {
    setTimeout(() => {
      setLoading((loading) => !loading);
    }, 100);
  });

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  return useContext(LoadingContext);
};
