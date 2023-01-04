import { motion } from "framer-motion";
import styled from "styled-components";

export const InputStyled = styled(motion.input)`
  width: 100%;
  max-width: 350px;
  height: 48px;

  border-radius: 5px;
  background-color: var(--white-color);
  padding-left: 10px;
  border: none;

  color: var(--gray-0);

  ::placeholder {
    color: var(--grey-color);
  }
`;

export const LabelStyled = styled(motion.label)`
  color: var(--paragraph-color);
  display: flex;
  flex-direction: column;
  font-weight: 400;
  gap: 0.3rem;
  width: 100%;
  max-width: 350px;
  font-size: 20px;
`;
