import { motion } from "framer-motion";
import styled from "styled-components";

export const Form = styled(motion.form)`
  width: 35%;
  height: 90%;
  min-width: 400px;
  max-height: 600px;

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

  .interactions {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1em;

    .inputs {
      width: 100%;
      height: 40%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 0.5em;
    }
  }

  .button {
    width: 100%;
    justify-content: flex-end;
  }

  button {
    position: sticky;
  }

  @media (max-width: 769px) {
    flex-direction: row;
    width: 95%;
    gap: 0.6em;
    align-items: flex-start;
    padding: 0.5em;
    height: 90%;

    .button {
      height: 100%;
      width: 10%;
      bottom: 0%;
      align-items: flex-end;
    }

    .interactions {
      .inputs {
        justify-content: flex-start;
        min-height: 150px;
      }
    }
    textarea {
      min-height: 120px;
    }
  }

  @media (max-width: 426px) {
    .textarea {
      display: none;
    }
  }

  /* @media (max-width: 768px) {
    width: 129.5px;
    height: 129.5px;
    margin-top: 0px;
  } */
`;
