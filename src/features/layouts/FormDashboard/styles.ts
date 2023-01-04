import { motion } from "framer-motion";
import styled from "styled-components";

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: flex-start;
  height: 90%;
  width: 45em;
  background-color: var(--grey1-color);
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  .title {
    display: flex;
    gap: 1rem;
    color: var(--white-color);
    border-radius: 8px;
    position: relative;
    width: 100%;
    height: 13%;
    background-color: var(--primary-color);
  }
`;

export const DivForm = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: var(--grey-color);
  display: flex;
  flex-direction: column;
  padding-bottom: 0px;
`;
