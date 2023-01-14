import * as styled from "./styles";

import { ITextAreaProps } from "../../features/interfaces/components/TextArea";

export const TextArea = ({
  placeholder,
  children,
  id,
  register,
}: ITextAreaProps) => (
  <styled.LabelStyled htmlFor={id}>
    {children}

    <styled.TextAreaStyled
      placeholder={placeholder}
      id={id}
      {...register(id)}
    />
  </styled.LabelStyled>
);
