import { motion } from "framer-motion";
import styled from "styled-components";

export const PrincipalDiv = styled(motion.div)`
  width: 40%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;

  cursor: pointer;

  @media (max-width: 1200px) {
    width: 100%;
    height: 50%;
    margin-top: 2em;
  }
`;

export const DivIcon = styled(motion.div)`
  width: 259px;
  height: 259px;

  background-color: var(--grey2-color);

  border-radius: 6em;

  .icon {
    width: 100%;
    height: 100%;

    object-fit: contain;

    border-radius: 6em;

    cursor: pointer;
  }

  /* 172.7 */
  @media (max-width: 1200px) {
    width: 172.7px;
    height: 172.7px;
    margin-top: 0px;
  }

  @media (max-width: 768px) {
    width: 129.5px;
    height: 129.5px;
    margin-top: 0px;
  }
`;

export const PrimaryDiv = styled(motion.div)`
  border-radius: 6em;

  background-color: var(--primary-color);

  border: 1em solid var(--primary-color);
`;
export const SecondaryDiv = styled(PrimaryDiv)`
  background-color: var(--secondary-color);

  border: 1em solid var(--secondary-color);
`;
export const TertiaryDiv = styled(PrimaryDiv)`
  background-color: var(--tertiary-color);

  border: 1em solid var(--tertiary-color);
`;
export const QuaternaryDiv = styled(PrimaryDiv)`
  background-color: var(--quaternary-color);

  border: 1em solid var(--quaternary-color);
`;
export const QuinaryDiv = styled(PrimaryDiv)`
  background-color: var(--quinary-color);

  border: 1em solid var(--quinary-color);
`;
