import { motion } from "framer-motion";
import styled from "styled-components";

export const WelcomeDiv = styled(motion.div)`
  width: 75%;
  position: relative;
  right: 0%;
  padding: 1em;
  padding-top: 4em;
  display: flex;
  align-items: top;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  background-color: var(--secondary75-color);
  height: 750px;
  border-radius: 0.5em;
  margin-bottom: 200px;
`;
