import * as styled from "./styles";
import * as layouts from "../../layouts";
import { useEffect } from "react";
import { api } from "../../services/api";

export const Technologies = () => {
 

  return (
    <styled.Main>
      <layouts.Header />

      <layouts.LoadingsProducer>
        <div></div>
      </layouts.LoadingsProducer>
    </styled.Main>
  );
};
