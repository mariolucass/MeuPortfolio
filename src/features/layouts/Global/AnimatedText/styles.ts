import { motion } from "framer-motion";
import styled from "styled-components";

export const AnimatedTextTitle = styled(motion.h3)`
  padding-right: 0.4rem;

  font-family: var(--font);
  font-weight: 600;
`;

export const AnimatedTextCharacter = styled(motion.span)`
  display: inline-block;

  margin-right: -0.001em;

  font-family: var(--font);
`;
