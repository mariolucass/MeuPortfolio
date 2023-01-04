import * as styled from "./styles";

interface ILinkProps {
  to: string;
  children: string;
}

export const Link = ({ to, children }: ILinkProps) => (
  <styled.LinkStyled to={to}>{children}</styled.LinkStyled>
);
