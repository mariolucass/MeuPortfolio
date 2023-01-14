import { motion } from "framer-motion";
import styled from "styled-components";

export const TextAreaStyled = styled(motion.textarea)`
  width: 100%;
  max-width: 350px;
  height: 200px;
  display: flex;
  align-content: flex-start;

  padding-left: 10px;
  padding-top: 10px;

  color: var(--gray-0);

  background-color: var(--white-color);

  border-radius: 5px;
  border: none;
  color: var(--black-color);

  ::placeholder {
    color: var(--grey-color);
  }
`;

export const LabelStyled = styled(motion.label)`
  width: 100%;
  max-width: 350px;

  display: flex;
  flex-direction: column;

  gap: 0.3rem;

  font-weight: 400;
  font-size: 20px;

  color: var(--quaternary-color);
`;
