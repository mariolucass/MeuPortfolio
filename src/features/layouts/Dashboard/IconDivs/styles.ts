import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const PrincipalDiv = styled(motion.div)`
  width: 40%;
  margin: 3.5% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DivIcon = styled(motion.div)`
  height: 259px;
  width: 259px;

  background-color: var(--grey2-color);

  border-radius: 6em;

  .icon {
    width: 100%;
    height: 100%;

    object-fit: contain;

    border-radius: 6em;
  }
`;

export const PrimaryDiv = styled(motion.div)`
  border-radius: 6em;
  border: 1em solid var(--primary-color);
  background-color: var(--primary-color);
  /* background-color: var(--quinary-color);
  border: 1em solid var(--quinary-color); */
`;
export const SecondaryDiv = styled(PrimaryDiv)`
  border: 1em solid var(--secondary-color);
  background-color: var(--secondary-color);
  /* background-color: var(--quaternary-color);
  border: 1em solid var(--quaternary-color); */
`;
export const TertiaryDiv = styled(PrimaryDiv)`
  border: 1em solid var(--tertiary-color);
  background-color: var(--tertiary-color);
`;
export const QuaternaryDiv = styled(PrimaryDiv)`
  border: 1em solid var(--quaternary-color);
  background-color: var(--quaternary-color);
  /* background-color: var(--secondary-color);
  border: 1em solid var(--secondary-color); */
`;
export const QuinaryDiv = styled(PrimaryDiv)`
  border: 1em solid var(--quinary-color);
  background-color: var(--quinary-color);
  /* background-color: var(--primary-color);
  border: 1em solid var(--primary-color); */
`;
