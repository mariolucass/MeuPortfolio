import * as styled from "./styles";
import * as layouts from "../../layouts";

import * as components from "../../../components";

export const Projects = () => (
  <styled.Main>
    <layouts.Header />

    <layouts.LoadingsProducer>
      <components.ListProjects />
    </layouts.LoadingsProducer>
  </styled.Main>
);
