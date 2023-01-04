import { UseFormRegister } from "react-hook-form";
import * as styled from "./styles";

interface IInputProps {
  type: string;
  placeholder: string;
  children: string;
  id: "email" | "name";
  register: UseFormRegister<any>;
}

export const Input = ({
  type,
  placeholder,
  children,
  id,
  register,
}: IInputProps) => (
  <styled.LabelStyled htmlFor={id}>
    {children}
    <styled.InputStyled
      placeholder={placeholder}
      type={type}
      id={id}
      {...register(id)}
    />
  </styled.LabelStyled>
);
