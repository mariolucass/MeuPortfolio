import * as styled from "./styles";

import { IInputProps } from "../../features/interfaces/components/Input";

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
