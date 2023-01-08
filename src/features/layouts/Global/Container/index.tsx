import * as styled from "./styles";
import { IChildren } from "../../../interfaces/global/globalInterfaces";

export const Container = ({ children }: IChildren) => (
  <styled.ContainerStyled>{children}</styled.ContainerStyled>
);
