import { MouseEventHandler, ReactNode } from "react";
import * as styled from "./styles";

interface IButton {
  styleType: "primary" | "secondary" | "tertiary" | "quaternary";
  children: string;
  type: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

// export const Button = ({ type, styleType, children, onClick }: IButton) => (
//   <styled.styleButton onClick={onClick} type={type} styleType={styleType}>
//     {children}
//   </styled.styleButton>
// );
