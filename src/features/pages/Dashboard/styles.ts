import { Stars } from "./../../../assets/images/backgrounds/stars";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.main)`
  width: 100%;

  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  margin-top: 100px;

  background-image: url(${Stars});

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

      @media (max-width: 769px) {
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
          min-width: 120px;

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
    }

    @media (max-width: 769px) {
      flex-direction: column;

      .textArea,
      .particularsArea {
        width: 100%;

        flex-direction: row;

        h2 {
          min-width: 20%;
          max-height: 100px;

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

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0.6rem;

    .biography {
      width: 100%;
      min-height: 125px;

      gap: 0.5rem;

      border: 0px;

      .textArea {
        width: 100%;
        h2 {
          min-width: 100px;
          font-size: 0.85em;
        }
      }

      .mediaArea {
        width: 100%;
        min-height: 40%;

        ul {
          height: 200px;

          li {
            div {
              min-height: 40%;

              a {
                height: 60px;
              }
            }
          }
        }
      }

      .particularsArea {
        width: 100%;
        min-height: 125px;
        gap: 0.5rem;

        h2 {
          min-width: 100px;
          font-size: 0.85em;
        }

        ul {
          height: 100%;
          flex-direction: row;

          li {
            height: 60%;
            width: 45%;
            div {
              min-height: 20px;
            }
          }
        }
      }
    }

    .profile {
      width: 65%;
      border: 0px;
    }
  }

  @media (max-width: 430px) {
    .profile {
      width: 60%;
      height: 55%;

      border: 0px;
    }

    .particularsArea {
      ul {
        min-width: 75%;

        flex-direction: row;

        li {
          min-width: 75%;
          max-height: 35%;
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

    background-image: linear-gradient(
      to left,
      #5ebfaf,
      #4d9c8f,
      #3c7a70,
      #2c5952,
      #1d3b36
    );

    border-radius: 0 15em 15em 0;

    div {
      width: 75%;
      height: 65%;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;

        border-radius: 1em;

        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      }
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;

    .profile {
      min-width: 85%;
      height: 35%;

      padding: 0;

      background-color: var(--primary-color);

      border: 0.2em solid var(--primary-color);

      img {
        width: 100%;
        height: 100%;

        top: 100%;
        object-fit: cover;
        border-radius: 1em;
      }
    }
  }
`;

export const SectionProjects = styled(motion.section)`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primary-color);
  background-image: radial-gradient(
    circle,
    #5ebfaf,
    #4d9c8f,
    #3c7a70,
    #2c5952,
    #1d3b36
  );

  .mainDiv {
    width: 90%;
    height: 100%;

    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    padding: 0px;
    padding-top: 1em;
    gap: 3em;

    & div {
      width: 75%;
      max-width: 975px;
      border-radius: 1em;

      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }

    .linkProjects {
      width: 100%;
      max-width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      box-shadow: none;
    }
  }

  @media (max-width: 1025px) {
    padding: 0px;
    margin: 0px;

    .mainDiv {
      width: 100%;

      div {
        width: 85%;
      }
    }
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

    background-image: linear-gradient(
      to right,
      #5ebfaf,
      #4d9c8f,
      #3c7a70,
      #2c5952,
      #1d3b36
    );

    border-radius: 15em 0 0 15em;
  }
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
