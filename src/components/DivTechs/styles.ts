import { motion } from "framer-motion";
import styled from "styled-components";

export const DivTechs = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  border-radius: 2em;
  padding: 1em;
  max-width: 30%;
  /* min-height: 80%; */
  overflow-y: auto;

  h2 {
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 0.4em;
    padding-top: 0.8em;
    padding-bottom: 0;
    gap: 1rem;
    margin-bottom: 55px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1em;
    li {
      h4 {
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
        color: var(--tertiary-color);
        text-transform: uppercase;
        word-spacing: 1px;
        letter-spacing: 2px;
      }

      p {
      }
    }
  }
`;
