import { motion } from "framer-motion";
import styled from "styled-components";

export const listInfo = styled(motion.ul)`
  display: flex;
  align-items: left;
  flex-direction: column;
  text-align: left;

  gap: 1em;

  li {
    display: flex;
    flex-direction: column;
    align-items: left;

    span {
      font-weight: 600;
      color: var(--paragraph-color);
    }
  }

  @media (max-width: 470px) {
    display: none;
  }
`;
