import { motion } from "framer-motion";
import styled from "styled-components";

export const Footer = styled(motion.footer)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 2em;
  background-color: var(--layout-color);
  border-radius: 0em 0em 0.5em 0.5em;
`;
