import { motion } from "framer-motion";
import styled from "styled-components";

export const DivMainTechs = styled(motion.div)`
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 6em;

  padding: 1rem;

  object-fit: cover;

  @media (max-width: 769px) {
    min-width: 100%;

    justify-content: space-between;
    flex-direction: column;

    overflow-y: auto;
  }
`;
