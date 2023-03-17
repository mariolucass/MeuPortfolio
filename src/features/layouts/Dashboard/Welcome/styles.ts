import { motion } from "framer-motion";
import styled from "styled-components";

export const WelcomeDiv = styled(motion.div)`
  width: 100%;
  height: 95vh;

  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  right: 0%;

  margin: 0 auto;
  border-radius: 0.5em;

  background-image: linear-gradient(
    to left bottom,
    #70e6d2,
    #5ab8a8,
    #448c80,
    #30625a,
    #1d3b36
  );
`;

export const ContainerDiv = styled(motion.div)`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

export const TextDiv = styled(motion.div)`
  width: 45%;
  height: 65%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 0.2rem;
  margin-left: 5em;
  margin: 6.5% 0;
  cursor: default;

  .principalName {
    width: 35%;

    padding: 0.7em;

    background-color: var(--primary-color);

    border-radius: 1.5em 1.5em 0 0;

    span {
      color: var(--tertiary-color);
    }
  }

  .paragraph {
    width: 35%;
    min-height: 275px;

    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: center;
    gap: 0.6rem;

    padding: 0.7em;

    background-color: var(--grey-color);

    border-radius: 0 0 1.5em 1.5em;

    h2,
    p {
      margin-top: 0.4em;
    }

    p {
      font-size: 1rem;

      color: var(--paragraph-color);
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 0px;
  }

  @media (max-width: 1440px) {
    .paragraph {
      width: 45%;
      min-height: 100px;
    }

    .principalName {
      width: 45%;
    }
  }

  @media (max-width: 1024px) {
    .paragraph {
      width: 75%;
      min-height: 100px;
    }

    .principalName {
      width: 75%;
    }
  }

  @media (max-width: 1023px) {
    .paragraph {
      width: 75%;
    }

    .principalName {
      width: 75%;
    }
  }

  @media (max-width: 550px) {
    width: 100%;

    .paragraph {
      width: 100%;
      min-height: 40%;

      h2 {
        font-size: 1.1em;
      }

      p {
        font-size: 0.95em;
      }
    }

    .principalName {
      width: 100%;
    }
  }
`;
