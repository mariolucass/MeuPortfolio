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

  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .textArea {
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
      border-radius: 0.7em;
      background-color: var(--primary-color);

      span {
        color: var(--tertiary-color);
      }
    }

    h2 {
      margin-top: 1em;
    }

    p {
      margin-top: 1em;
      width: 55%;
      color: var(--paragraph-color);
      font-size: 20px;
    }
  }
`;
