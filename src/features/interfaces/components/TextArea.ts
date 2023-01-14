import { UseFormRegister } from "react-hook-form";

export interface ITextAreaProps {
  placeholder: string;
  children: string;
  id: "message";
  register: UseFormRegister<any>;
}
