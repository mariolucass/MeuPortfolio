import { motion } from "framer-motion";
import styled from "styled-components";

export const DivTechs = styled(motion.div)`
  min-width: 60%;
  height: 55%;

  display: flex;
  flex-direction: column;

  padding: 1em;
  gap: 1em;

  border-radius: 2em 0 0 2em;
  background-color: var(--primary-color);

  overflow-y: auto;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  cursor: default;

  h2 {
    font-size: 3em;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;

    gap: 1em;

    li {
      transition: 0.5s;
      gap: 0.6em;

      h4 {
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
        color: var(--tertiary-color);
        text-transform: uppercase;

        letter-spacing: 2px;
        margin-bottom: 1em;
      }

      p {
        min-height: 55%;
        background-color: var(--secondary-color);

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;

        border-radius: 0.65em;
        padding: 1em;
      }
    }
  }

  @media (max-width: 1310px) {
    min-width: 85%;
  }

  @media (max-width: 769px) {
    min-width: 50%;
    border-radius: 0.5em;
    min-height: 100%;

    ul {
      gap: 1rem;
      justify-content: space-between;
    }
  }
`;
