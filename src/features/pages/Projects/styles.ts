import styled from "styled-components";

import { Stars } from "../../../assets/images/backgrounds/stars";

export const Main = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-top: 100px;
  background-image: url(${Stars});
`;
