import { Avatar } from "@mui/material";
import * as styled from "./styles";

export const Welcome = () => {
  return (
    <styled.WelcomeDiv>
      <div>
        <div>
          <h1>Olá, sou Mário!</h1>
        </div>

        <h2>Desenvolvedor Front-End com</h2>
        <p>
          Experiencia em React, JavaScript e procurando emprego na área de
          front-end, busco superar obstaculos sempre com sede de conhecimento.
        </p>
      </div>

      <div>
        <Avatar sx={{ width: 256, height: 256 }} />
      </div>
    </styled.WelcomeDiv>
  );
};
