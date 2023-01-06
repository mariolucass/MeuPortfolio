import { motion } from "framer-motion";
import styled from "styled-components";

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: left;
  justify-content: flex-start;
  height: 100%;
  width: 45em;
  background-color: var(--grey1-color);
  border-radius: 1em;
  /* box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px; */
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  .title {
    display: flex;
    gap: 1rem;
    color: var(--white-color);
    border-radius: 8px;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 13%;
    background-color: var(--secondary-color);
  }

  button {
    position: relative;
    top: 23.5%;
    left: 85%;
  }
`;
