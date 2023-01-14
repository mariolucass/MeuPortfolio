import { motion } from "framer-motion";
import styled from "styled-components";

export const Form = styled(motion.form)`
  width: 35%;
  height: 75%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 2em;
  padding: 1.5rem;
  padding-top: 0px;

  background-color: var(--grey1-color);

  border-radius: 1em;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  .title {
    width: 100%;
    min-height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    gap: 1rem;

    color: var(--white-color);

    background-color: var(--secondary-color);

    border-radius: 8px;

    h2 {
      min-height: 100%;

      display: flex;
      align-items: center;
    }
  }

  .button {
    margin-top: 1.5em;
    width: 100%;
    justify-content: flex-end;
  }

  button {
    position: sticky;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 95%;
  }

  /* @media (max-width: 768px) {
    width: 129.5px;
    height: 129.5px;
    margin-top: 0px;
  }

  @media (max-width: 768px) {
    width: 129.5px;
    height: 129.5px;
    margin-top: 0px;
  } */
`;
