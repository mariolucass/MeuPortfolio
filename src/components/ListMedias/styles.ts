import { motion } from "framer-motion";
import styled from "styled-components";

export const MediaUl = styled(motion.ul)`
  min-width: 32%;

  display: flex;
  justify-content: flex-end;

  li {
    div {
      width: 100px;

      display: flex;
      flex-direction: row;

      padding: 0;

      color: var(--primary-color);
    }
  }
`;
