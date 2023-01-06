import { MouseEventHandler, ReactNode } from "react";

export interface IButton {
  children: string | ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variation?: "primary" | "secondary" | "tertiary" | "quaternary";
}
