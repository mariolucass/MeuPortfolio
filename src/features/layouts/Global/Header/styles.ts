import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
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

    li {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      div {
        margin-top: 2px;
        height: 5px;
        width: 50%;
        background-color: var(--primary-color);
      }
    }
  }

  h1 {
    a {
      color: var(--secondary-color);
      text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
        0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);

      span {
        color: var(--tertiary-color);
      }
    }
  }
`;

export const LogoDiv = styled(motion.div)`
  width: 7.5%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const LinkStyled = styled(Link)`
  color: var(--tertiary-color);
  font-weight: 600;
`;
