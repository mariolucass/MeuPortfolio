import * as styled from "./styles";
import * as layouts from "../../layouts";
import { useLoadingContext } from "../../../context/LoadingContext/LoadingContext";
import { useEffect } from "react";
import { api } from "../../services/api";

export const Projects = () => {
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await api.get("/mariolucass/repos");
        console.log(response.data[0].description);
      } catch (error) {
        console.log(error);
      }
    };
    loadProjects();
  }, []);

  return (
    <styled.Main>
      <layouts.Header />
      <layouts.LoadingsProducer>
        <div></div>
      </layouts.LoadingsProducer>
    </styled.Main>
  );
};
