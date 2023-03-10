import * as styled from "./styles";
import * as components from "../../../../components";
import * as database from "../../../database";

export const TechsDiv = () => {
  return (
    <styled.DivMainTechs>
      <components.TechsInfoList
        title="Habilidades Front-End"
        list={database.Techs.filter((elem) => elem.type === "Front-End")}
      />

      <components.TechsInfoList
        title="Habilidades Back-End"
        list={database.Techs.filter((elem) => elem.type === "Back-End")}
      />
    </styled.DivMainTechs>
  );
};
