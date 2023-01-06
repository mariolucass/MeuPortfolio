import * as styled from "./styles";
import { IButton } from "../../features/interfaces/components/Button";

export const Button = ({ type, variation, children, onClick }: IButton) => {
  return (
    <styled.styleButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type={type}
      variation={variation}
      onClick={onClick}
    >
      {children}
    </styled.styleButton>
  );
};
