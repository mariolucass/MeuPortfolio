import * as styled from "./styles";

interface ILinkProps {
  to: string;
  children: string;
}

export const Link = ({ to, children }: ILinkProps) => {
  return <styled.LinkStyled to={to}>{children}</styled.LinkStyled>;
};
