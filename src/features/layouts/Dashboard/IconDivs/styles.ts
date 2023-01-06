import { motion } from "framer-motion";
import styled from "styled-components";

export const PrincipalDiv = styled(motion.div)`
  width: 40%;
  margin: 3.5% 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivIcon = styled(motion.div)`
  height: 259px;
  width: 259px;
  border-radius: 6em;
  background-color: var(--grey1-color);

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
`;
export const SecondaryDiv = styled(motion.div)`
  border-radius: 6em;
  border: 1em solid var(--secondary-color);
  background-color: var(--secondary-color);
`;
export const TertiaryDiv = styled(motion.div)`
  border-radius: 6em;
  border: 1em solid var(--tertiary-color);
  background-color: var(--tertiary-color);
`;
export const QuaternaryDiv = styled(motion.div)`
  border-radius: 6em;
  border: 1em solid var(--quaternary-color);
  background-color: var(--quaternary-color);
`;
export const QuinaryDiv = styled(motion.div)`
  border-radius: 6em;
  border: 1em solid var(--quinary-color);
  background-color: var(--quinary-color);
`;
