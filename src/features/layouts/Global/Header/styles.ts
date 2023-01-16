import { motion } from "framer-motion";
import styled from "styled-components";

import { Link } from "react-router-dom";

export const Nav = styled(motion.nav)`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  margin: 0 auto;

  background-color: var(--layout-color);

  border-radius: 0em 0em 0.5em 0.5em;

  .listLinks {
    display: flex;
    align-items: center;

    margin-right: 1em;
    padding: 1rem;

    ul {
      display: flex;

      gap: 1em;

      li {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        a {
          font-weight: 600;
          color: var(--tertiary-color);
        }

        div {
          width: 50%;
          height: 5px;

          margin-top: 2px;

          background-color: var(--primary-color);
        }
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
  width: 180px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;

export const LinkStyled = styled(Link)`
  font-weight: 600;
  color: var(--tertiary-color);
`;
