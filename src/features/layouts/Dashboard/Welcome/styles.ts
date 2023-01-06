import { motion } from "framer-motion";
import styled from "styled-components";

export const WelcomeDiv = styled(motion.div)`
  width: 100%;
  position: relative;
  right: 0%;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  border-radius: 0.5em;
  height: 100%;

  .textArea {
  }
`;

export const ContainerDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TextDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 45%;
  padding: 0.2rem;
  margin-left: 5em;
  margin: 6.5% 0;

  .principalName {
    padding: 0.7em;
    width: 35%;
    border-radius: 1.5em 1.5em 0 0;
    background-color: var(--primary-color);

    span {
      color: var(--tertiary-color);
    }
  }

  .paragraph {
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: center;
    padding: 0.7em;
    width: 35%;
    height: 210px;
    border-radius: 0.7em;
    background-color: var(--grey-color);
    border-radius: 0 0 1.5em 1.5em;

    h2 {
      margin-top: 0.4em;
    }

    p {
      margin-top: 0.4em;
      color: var(--paragraph-color);
      font-size: 20px;
    }

    span {
    }
  }
`;
