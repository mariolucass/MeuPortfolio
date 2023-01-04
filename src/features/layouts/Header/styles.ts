import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
  width: 100%;
  position: sticky;
  top: 0%;
  z-index: 9999;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 2em;
  background-color: var(--layout-color);
  border-radius: 0em 0em 0.5em 0.5em;

  ul {
    display: flex;
    gap: 1em;
  }

  h1 {
    color: var(--secondary-color);
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
      0px 18px 23px rgba(0, 0, 0, 0.1);
  }
`;
