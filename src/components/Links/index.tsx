import * as styled from "./styles";
import { ILinkProps } from "../../features/interfaces/components/Link";

export const Link = ({ to, children }: ILinkProps) => (
  <styled.LinkStyled to={to}>{children}</styled.LinkStyled>
);
