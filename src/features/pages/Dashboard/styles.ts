import { motion } from "framer-motion";
import styled from "styled-components";

import Languages from "../../../assets/images/backgrounds/languages.jpg";
import Projects from "../../../assets/images/backgrounds/projects.jpg";
import Contacts from "../../../assets/images/backgrounds/contacts.jpg";

export const Main = styled(motion.main)`
  width: 100%;
  min-height: 100%;
  margin-top: 100px;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;

  section {
    width: 100%;
    min-height: 100%;
    margin: 0 auto;

    display: flex;

    overflow-x: hidden;

    div {
      display: flex;
      width: 50%;
    }

    .info {
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 1em;
    }

    .message {
      height: 100%;
      align-items: center;
      justify-content: center;

      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      h2 {
        height: 8%;
      }

      div {
        height: 10%;
        width: 45%;
        padding: 1.5em;
        bottom: 0%;

        position: relative;

        justify-content: center;
        align-items: center;
        text-align: center;

        background-color: var(--secondary-color);

        border-radius: 0.7em 0.7em 0em 0em;
      }
    }
  }
`;

export const SectionAbout = styled(motion.section)`
  background-color: var(--secondary-color);
  height: 100%;
  align-items: center;
  height: 1000px;

  div {
    flex-direction: column;
    height: 100%;
  }

  .listMedias {
    position: sticky;
    flex-direction: row;
  }

  .biography {
    width: 70%;
    height: 100%;
    padding: 1em;

    padding-top: 3em;
    gap: 3.5rem;

    background-color: var(--grey-color);

    align-items: left;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;

    border-left: 0.5em solid var(--secondary-color);
    /* border-bottom: 0.5em solid var(--secondary-color); */

    .textArea {
      width: 40%;
      gap: 1em;

      h2 {
        padding: 0.4em;
        padding-top: 0.8em;
        padding-bottom: 0;
        border-radius: 1em 1em 0 0;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        gap: 1rem;

        background-color: var(--primary-color);

        div {
          height: 10px;
          width: 100%;
          border-radius: 1em 1em 0 0;
          padding: 0;

          background-color: var(--secondary-color);
        }
      }

      p {
        width: 98%;
        max-height: 500px;
        text-align: justify;

        @media (max-width: 1200px) {
          width: 75%;
        }
      }

      .mediaArea {
        width: 100%;
        height: 12%;
        align-items: flex-end;
        padding: 2px;
        padding: 1em;
        /* border-right: 3px solid var(--primary-color); */
        /* border-bottom: 3px solid var(--primary-color); */

        .link {
          background-color: var(--button-color);
          width: 32%;
          height: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid transparent;
          border-radius: 0.3em;
          font-weight: bold;
          padding: 1em;

          :hover {
            background-color: var(--buttonHover-color);
          }

          :active {
            background-color: var(--buttonActive-color);
          }
        }
      }
    }

    .particularsArea {
      width: 40%;
      gap: 2em;

      h2 {
        padding: 0.4em;
        padding-top: 0.8em;
        padding-bottom: 0;
        border-radius: 1em 1em 0 0;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        gap: 1rem;

        background-color: var(--primary-color);

        div {
          height: 10px;
          width: 100%;
          border-radius: 1em 1em 0 0;
          padding: 0;

          background-color: var(--secondary-color);
        }
      }
    }
  }

  .profile {
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
  height: 1000px;
  background: rgb(29, 59, 54);
  background: linear-gradient(
    90deg,
    rgba(29, 59, 54, 1) 0%,
    rgba(14, 15, 14, 1) 100%
  );

  .message {
    background-image: linear-gradient(#2c595290, #2c595290, #2c595290),
      url(${Languages});
  }
`;

export const SectionProjects = styled(motion.section)`
  height: 1000px;
  background: rgb(14, 15, 14);
  background: linear-gradient(
    90deg,
    rgba(14, 15, 14, 1) 0%,
    rgba(29, 59, 54, 1) 100%
  );

  .message {
    background-image: linear-gradient(#2c595290, #2c595290, #2c595290),
      url(${Projects});
  }
`;

export const SectionForm = styled(motion.section)`
  height: 1000px;
  background-color: var(--primary-color);
  align-items: center;

  .message {
    background-image: linear-gradient(#2c595290, #2c595290, #2c595290),
      url(${Contacts});
  }
`;
