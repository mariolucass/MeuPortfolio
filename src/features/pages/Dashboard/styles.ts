import { motion } from "framer-motion";
import styled from "styled-components";
import techs from "/src/assets/languages.png";
import projects from "/src/assets/projects.png";

export const Main = styled(motion.main)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  section {
    width: 100%;
    margin: 0 auto;
    height: 550px;
    display: flex;

    div {
      padding: 1em;
      width: 50%;
    }

    .link {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .message {
      background-repeat: no-repeat;
      padding-bottom: 0px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      border-radius: 0.5em;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 1.5em;
        text-align: center;
        /* bottom: 0%; */

        height: 35%;
        width: 45%;
        background-color: var(--secondary-color);
        /* border-radius: 0.7em; */
      }
    }
  }
`;

export const SectionAbout = styled(motion.section)`
  .information {
    width: 50%;
    height: 100%;
    background-color: var(--secondary-color);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey3-color);
  }
`;

export const SectionTechs = styled(motion.section)`
  background: rgb(14, 15, 14);
  background: linear-gradient(
    90deg,
    rgba(14, 15, 14, 1) 0%,
    rgba(29, 59, 54, 1) 100%
  );

  div {
    margin-right: 10%;
  }

  .message {
    background-image: url(${techs});

    div {
      left: 30%;
    }
  }
`;

export const SectionProjects = styled(motion.section)`
  background: rgb(29, 59, 54);
  background: linear-gradient(
    90deg,
    rgba(29, 59, 54, 1) 0%,
    rgba(14, 15, 14, 1) 100%
  );

  div {
    margin-left: 10%;
  }

  .message {
    background-image: url(${projects});

    div {
      right: 30%;
    }
  }
`;

export const SectionEmail = styled(motion.section)`
  background-color: var(--grey-color);

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      height: 90%;
      width: 45em;
      background-color: var(--grey1-color);
      border-radius: 1em;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
  }
`;
