import * as styled from "./styles";
import * as layouts from "../../layouts";

export const Projects = () => (
  <styled.Main>
    <layouts.Header />

    <layouts.LoadingsProducer>
      <layouts.ListProjects />
    </layouts.LoadingsProducer>
  </styled.Main>
);
