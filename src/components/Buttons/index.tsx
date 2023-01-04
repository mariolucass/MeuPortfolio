import { MouseEventHandler, ReactNode } from "react";
import * as styled from "./styles";

interface IButton {
  children: string | ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variation?: "primary" | "secondary" | "tertiary" | "quaternary";
}

export const Button = ({ type, variation, children, onClick }: IButton) => {
  return (
    <styled.styleButton type={type} variation={variation} onClick={onClick}>
      {children}
    </styled.styleButton>
  );
};
