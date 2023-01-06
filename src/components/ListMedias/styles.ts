import { motion } from "framer-motion";
import styled from "styled-components";

export const MediaUl = styled(motion.ul)`
  li {
    .social {
      color: var(--primary-color);
      width: 100px;
      display: flex;
      padding: 0;
      flex-direction: row;
    }
  }
`;
