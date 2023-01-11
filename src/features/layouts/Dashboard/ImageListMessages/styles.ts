import { motion } from "framer-motion";
import styled from "styled-components";

export const DivImages = styled(motion.div)`
  width: 33%;
  height: 100%;

  padding: 0px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;
