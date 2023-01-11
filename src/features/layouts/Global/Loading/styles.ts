import { motion } from "framer-motion";
import styled from "styled-components";

export const LoadingStyled = styled(motion.div)`
  width: 100%;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2rem;

  & > img {
    height: 200px;
  }

  @media (max-width: 422px) {
    & > img {
      height: 150px;
    }
  }
`;
