import { motion } from "framer-motion";
import styled from "styled-components";

export const listParticulars = styled(motion.ul)`
  display: flex;
  width: 100%;
  /* flex-direction: column; */
  gap: 0.1em;
  height: 40%;
  align-items: top;
  justify-content: center;
  overflow-y: auto;
  flex-wrap: wrap;

  li {
    display: flex;
    width: 31%;
    height: 20%;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* gap: 1em; */
    border-radius: 1.4em;

    background-color: var(--primary-color);
    color: var(--white-color);
    padding: 0.3em;
    padding: 0px;
    transition: 0.4s ease-out;
    /* box-shadow: -1rem 0 3rem #000; */
    border: 2px solid var(--tertiary-color);
    border-left: 0px;
    border-right: 0px;

    svg {
      width: 25%;
      max-width: 32px;
      max-height: 32px;
      height: 100%;
      object-fit: contain;
    }

    span {
      display: flex;
      font-size: 1em;
      height: 40%;
      width: 200px;
      align-items: center;
      justify-content: center;
    }

    :hover {
      transform: translateY(20px);

      transition: 0.4s ease-out;
    }
  }
`;

export const LeftDiv = styled(motion.div)`
  max-width: 16px;
  /* border-radius: 1em 0 0 1em; */
  background-color: var(--secondary-color);
`;

export const LeftDiv2 = styled(motion.div)`
  max-width: 4px;
  background-color: var(--quaternary-color);
`;

export const RightDiv = styled(LeftDiv)`
  /* border-radius: 0 1em 1em 0; */
`;

export const RightDiv2 = styled(LeftDiv2)``;
