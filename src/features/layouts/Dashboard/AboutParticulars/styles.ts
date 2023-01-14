import { motion } from "framer-motion";
import styled from "styled-components";

export const listParticulars = styled(motion.ul)`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
  overflow-y: auto;
  flex-wrap: wrap;

  gap: 0.1em;
  row-gap: 1.2em;

  li {
    width: 31%;
    height: 20%;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: 0px;

    background-color: var(--primary-color);
    color: var(--white-color);

    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    border: 2px solid var(--tertiary-color);
    border-radius: 1.4em;
    border-left: 0px;
    border-right: 0px;

    transition: 0.4s ease-out;
    cursor: pointer;

    svg {
      width: 25%;
      height: 100%;
      max-width: 32px;
      max-height: 32px;

      object-fit: contain;
    }

    span {
      width: 80%;
      height: 40%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1em;
    }

    :hover {
      transform: translateY(20px);

      transition: 0.4s ease-out;
    }
  }

  @media (max-width: 1441px) {
    li {
      width: 75%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;

    li {
      min-width: 35%;
      height: 30%;

      div {
        min-height: 10px;
      }
    }
  }
`;

export const LeftDiv = styled(motion.div)`
  max-width: 10%;

  background-color: var(--secondary-color);

  border-radius: 1em 0 0 1em;
`;

export const LeftDiv2 = styled(motion.div)`
  max-width: 5%;

  background-color: var(--quaternary-color);
`;

export const RightDiv = styled(LeftDiv)`
  border-radius: 0 1em 1em 0;
`;

export const RightDiv2 = styled(LeftDiv2)``;
