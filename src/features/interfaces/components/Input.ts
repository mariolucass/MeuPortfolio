import { UseFormRegister } from "react-hook-form";

export interface IInputProps {
  type: string;
  placeholder: string;
  children: string;
  id: "email" | "name";
  register: UseFormRegister<any>;
}
