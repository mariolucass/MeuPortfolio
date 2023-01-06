import { motion } from "framer-motion";
import styled from "styled-components";
// import techs from "/src/assets/languages.png";
// import projects from "/src/assets/projects.png";

export const Main = styled(motion.main)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  margin-top: 100px;

  section {
    width: 100%;
    margin: 0 auto;
    min-height: 650px;
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
        bottom: 0%;

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
  display: flex;
  height: 100%;
  align-items: center;
  height: 1000px;

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .listMedias {
    left: 33%;
    bottom: 44%;

    position: relative;
    flex-direction: row;
  }

  .biography {
    width: 70%;
    height: 100%;

    background-color: var(--grey-color);

    align-items: left;
    justify-content: flex-start;
    text-align: left;

    border-left: 0.5em solid var(--secondary-color);
    border-bottom: 0.5em solid var(--secondary-color);

    padding-top: 3em;
    gap: 3.5rem;

    .textArea {
      display: flex;
      gap: 2em;

      h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 45%;
        height: 10%;
        padding: 0.4em;
        padding-top: 0.8em;
        padding-bottom: 0;
        border-radius: 1em 1em 0 0;
        /* border-radius: 1rem; */
        background-color: var(--primary-color);
        display: flex;
        flex-direction: column;

        div {
          height: 10px;
          width: 105%;
          background-color: var(--secondary-color);
          padding: 0;
        }
      }

      p {
        width: 45%;
        text-align: justify;
      }
    }
  }

  .avatar {
    width: 35%;
    padding: 0;
    border-right: 1em solid var(--primary-color);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 100%;
    }
  }
`;

export const SectionTechs = styled(motion.section)`
  background: rgb(29, 59, 54);
  background: linear-gradient(
    90deg,
    rgba(29, 59, 54, 1) 0%,
    rgba(14, 15, 14, 1) 100%
  );

  .message {
    margin-left: 2.5%;
  }
`;

export const SectionProjects = styled(motion.section)`
  background: rgb(14, 15, 14);
  background: linear-gradient(
    90deg,
    rgba(14, 15, 14, 1) 0%,
    rgba(29, 59, 54, 1) 100%
  );

  .message {
    margin-right: 2.5%;
  }
`;

export const SectionForm = styled(motion.section)`
  background-color: var(--primary-color);

  .greetings {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .formDiv {
    background-color: var(--primary-color);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;
