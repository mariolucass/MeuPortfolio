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
    min-width: 72px;
    min-height: 72px;

    position: sticky;
  }

  @media (max-width: 769px) {
    width: 80%;
    height: 90%;

    justify-content: center;
    flex-direction: row;
    align-items: flex-start;

    gap: 1em;
    padding: 0.5em;

    .title {
      svg {
        display: none;
      }

      h2 {
        padding: 0.5em;
      }

      width: 30%;
    }

    .button {
      width: 1%;

      align-items: flex-end;

      position: relative;
      top: 100px;
      right: 15px;
    }

    .interactions {
      width: 45%;

      align-items: center;

      .inputs {
        min-height: 150px;

        justify-content: flex-start;

        margin-bottom: 10px;

        input {
          width: 170px;
        }
      }
    }

    .textarea {
      display: none;
    }
  }

  @media (max-width: 426px) {
  }
`;
