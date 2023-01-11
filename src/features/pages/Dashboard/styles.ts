import { motion } from "framer-motion";
import styled from "styled-components";

import { Stars } from "../../../assets/images/backgrounds/stars";

export const Main = styled(motion.main)`
  width: 100%;

  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  margin-top: 100px;

  section {
    width: 100%;
    height: 95vh;

    display: flex;
    overflow-x: hidden;

    margin: 0 auto;

    div {
      width: 50%;

      display: flex;
    }

    .info {
      align-items: center;
      justify-content: center;
      flex-direction: column;

      padding: 1em;
      gap: 3em;

      @media (max-width: 1419px) {
        ul {
          width: 100%;

          display: flex;
          align-content: flex-start;
          justify-content: space-around;
          flex-direction: row;
          flex-wrap: wrap;

          column-gap: 4px;
          gap: 0.25rem;
          margin-left: 0px;
        }
      }

      @media (max-width: 1354px) {
        li {
          max-width: 126px;
          max-height: 126px;
        }
      }

      @media (max-width: 1023px) {
        li {
          max-width: 84px;
          max-height: 84px;
        }
      }

      @media (max-width: 759px) {
        ul {
          width: 80%;
        }

        li {
          max-width: 105px;
          max-height: 105px;
        }
      }

      @media (max-width: 587px) {
        li {
          max-width: 84px;
          max-height: 84px;
        }
      }

      @media (max-width: 366px) {
        ul {
          width: 100%;
        }
        li {
          max-width: 63px;
          max-height: 63px;
        }
      }
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

      /* div {
        width: 45%;
        height: 10%;

        justify-content: center;
        align-items: center;
        text-align: center;

        padding: 1.5em;

        position: relative;
        bottom: 0%;

        background-color: var(--secondary-color);

        border-radius: 0.7em 0.7em 0em 0em;
      } */
    }

    @media (max-width: 767px) {
      div {
        min-height: 25vh;

        display: flex;
      }

      .message {
        width: 100%;
        height: 50vh;

        border-radius: 0px;
      }

      .info {
        width: 100%;
        height: 50vh;
      }
    }
  }
`;

export const SectionAbout = styled(motion.section)`
  height: 100%;

  align-items: center;

  background-image: url(${Stars});

  div {
    height: 100%;

    flex-direction: column;
  }

  .profile {
    width: 35%;

    padding: 0;

    background-color: var(--primary-color);

    border: 1em solid var(--primary-color);

    img {
      width: 100%;
      height: 100%;

      top: 100%;
      object-fit: cover;
      border-radius: 1em;
    }
  }

  .biography {
    width: 70%;
    height: 100%;

    align-items: left;
    flex-direction: row;
    justify-content: space-around;
    text-align: left;

    padding: 1em;
    padding-top: 3em;
    gap: 3.5rem;

    border-left: 0.5em solid var(--secondary-color);
    border-bottom: 0.5em solid var(--secondary-color);

    .listMedias {
      flex-direction: row;

      position: sticky;
    }

    .textArea {
      width: 40%;

      gap: 1em;

      h2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        padding: 0.4em;
        padding-top: 0.8em;
        padding-bottom: 0;
        gap: 1rem;

        background-color: var(--primary-color);
        border-radius: 1em 1em 0 0;

        div {
          width: 100%;
          height: 10px;

          padding: 0;

          background-color: var(--secondary-color);

          border-radius: 1em 1em 0 0;
        }
      }

      p {
        width: 98%;
        max-height: 200px;

        overflow: hidden;

        text-align: justify;
        text-overflow: ellipsis;

        @media (max-width: 1200px) {
          width: 75%;
        }
      }

      .mediaArea {
        width: 100%;
        height: 12%;

        align-items: flex-end;

        padding: 1em;

        .link {
          width: 32%;
          height: 64px;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 1em;

          font-weight: bold;

          background-color: var(--button-color);

          border: 2px solid transparent;
          border-radius: 0.3em;

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
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        gap: 1rem;
        padding: 0.4em;
        padding-top: 0.8em;
        padding-bottom: 0;

        background-color: var(--primary-color);

        border-radius: 1em 1em 0 0;

        div {
          width: 100%;
          height: 10px;

          padding: 0;

          background-color: var(--secondary-color);

          border-radius: 1em 1em 0 0;
        }
      }
    }

    @media (max-width: 769px) {
      flex-direction: column;

      .textArea,
      .particularsArea {
        width: 100%;

        flex-direction: row;

        h2 {
          min-width: 20%;
          height: 30%;

          font-size: 1em;

          div {
            min-height: 10px;
            max-height: 100px;
          }
        }
      }

      .particularsArea {
        ul {
          min-width: 75%;

          flex-direction: row;
        }
      }
    }
  }
`;

export const SectionTechs = styled(motion.section)`
  background: linear-gradient(
    90deg,
    rgba(29, 59, 54, 1) 0%,
    rgba(14, 15, 14, 1) 100%
  );

  .message {
    width: 75%;

    background-color: var(--tertiary-color);

    border-radius: 0 15em 15em 0;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const SectionProjects = styled(motion.section)`
  background-color: var(--primary-color);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;

  .mainDiv {
    width: 100%;
    padding: 0px;
    padding-top: 3em;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1em;

    & div {
      border-radius: var(--curve);
    }

    .linkProjects {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const SectionForm = styled(motion.section)`
  align-items: center;

  background: linear-gradient(
    90deg,
    rgba(14, 15, 14, 1) 0%,
    rgba(29, 59, 54, 1) 100%
  );

  .message {
    width: 75%;

    background-color: var(--tertiary-color);

    border-radius: 15em 0 0 15em;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
