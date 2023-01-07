import { motion } from "framer-motion";
import styled from "styled-components";

export const AnimatedTextTitle = styled(motion.h2)`
  font-size: 3rem;
  padding: 1rem;
  padding-right: 0.4rem;
  font-weight: 600;
  background-color: var(--secondary-color);
  /* border-radius: 1rem; */
`;

export const AnimatedTextCharacter = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;
