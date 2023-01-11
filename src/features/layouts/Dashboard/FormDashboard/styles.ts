import { motion } from "framer-motion";
import styled from "styled-components";

export const Form = styled(motion.form)`
  width: 50%;
  height: 75%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;

  gap: 2em;

  background-color: var(--grey1-color);

  border-radius: 1em;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  .title {
    width: 100%;
    height: 10%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    gap: 1rem;

    color: var(--white-color);

    background-color: var(--secondary-color);

    border-radius: 8px;
  }

  button {
    position: sticky;
  }
`;
