import * as styled from "./styles";

import { ITextAreaProps } from "../../features/interfaces/components/TextArea";

export const TextArea = ({
  placeholder,
  children,
  id,
  setState,
}: ITextAreaProps) => (
  <styled.LabelStyled htmlFor={id} className="textarea">
    {children}

    <styled.TextAreaStyled
      className="textarea"
      placeholder={placeholder}
      id={id}
      onChange={(elem) => {
        setState(elem.target.value);
      }}
    />
  </styled.LabelStyled>
);
