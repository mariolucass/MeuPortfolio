import { motion } from "framer-motion";
import styled from "styled-components";

export const listParticulars = styled(motion.ul)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1em;
  height: 40%;
  overflow-y: auto;

  li {
    display: flex;
    width: 30%;
    height: 75px;
    align-items: center;
    justify-content: space-around;
    border-radius: 1em 5em 5em 1em;
    background-color: var(--primary-color);
    color: var(--white-color);
    padding: 0.3em;

    svg {
      width: 25%;
      max-width: 32px;
      max-height: 32px;
      height: 100%;
      object-fit: contain;
    }

    span {
      width: 50%;
      display: flex;
      align-items: center;
    }
  }
`;
