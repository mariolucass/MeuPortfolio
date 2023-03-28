import { motion } from "framer-motion";
import styled from "styled-components";

import { Stars } from "../../../assets/images/backgrounds/stars";

export const Main = styled(motion.main)`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    display: flex;
    justify-content: center;
    width: 75%;
    padding: 1em;
    margin-top: 3em;
    border-radius: 0.6em;
    background-color: var(--primary-color);
  }

  margin-top: 100px;
  background-image: url(${Stars});
`;
