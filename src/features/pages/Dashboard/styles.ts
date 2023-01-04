import { motion } from "framer-motion";
import styled from "styled-components";
import techs from "/src/assets/languages.png";
import projects from "/src/assets/projects.png";

export const Main = styled(motion.main)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  section {
    width: 100%;
    margin: 0 auto;
    height: 550px;
    display: flex;
    overflow-x: hidden;

    div {
      padding: 1em;
      width: 50%;
    }

    .info {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
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

        height: 20%;
        width: 45%;
        background-color: var(--secondary-color);
        border-radius: 0.7em 0.7em 0em 0em;
      }
    }
  }
`;

export const SectionAbout = styled(motion.section)`
  background-color: var(--secondary-color);
  .information {
    width: 50%;
    height: 100%;
  }

  .greetings {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SectionTechs = styled(motion.section)`
  background: rgb(14, 15, 14);
  background: linear-gradient(
    90deg,
    rgba(14, 15, 14, 1) 0%,
    rgba(29, 59, 54, 1) 100%
  );

  .message {
    background-image: url(${techs});
    margin-left: 2.5%;

    /* div {
      left: 30%;
    } */
  }
`;

export const SectionProjects = styled(motion.section)`
  background: rgb(29, 59, 54);
  background: linear-gradient(
    90deg,
    rgba(29, 59, 54, 1) 0%,
    rgba(14, 15, 14, 1) 100%
  );

  .message {
    background-image: url(${projects});
    margin-right: 2.5%;

    /* div {
      right: 30%;
    } */
  }
`;

export const SectionForm = styled(motion.section)`
  background-color: var(--grey-color);

  .greetings {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
