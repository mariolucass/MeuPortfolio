import { motion } from "framer-motion";
import styled from "styled-components";

import Languages from "../../../assets/images/backgrounds/languages.jpg";
import Projects from "../../../assets/images/backgrounds/projects.jpg";
import Contacts from "../../../assets/images/backgrounds/contacts.jpg";
import { Stars } from "../../../assets/images/backgrounds/stars";

export const Main = styled(motion.main)`
  width: 100%;

  margin-top: 100px;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;

  section {
    width: 100%;
    height: 95vh;
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
      gap: 3em;

      @media (max-width: 1419px) {
        ul {
          display: flex;
          width: 100%;
          flex-direction: row;
          column-gap: 4px;
          flex-wrap: wrap;
          align-content: flex-start;
          justify-content: space-around;
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

    @media (max-width: 767px) {
      div {
        display: flex;
        min-height: 25vh;
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
  /* background-color: var(--secondary-color) */
  background-image: url(${Stars});
  height: 100%;
  align-items: center;

  div {
    flex-direction: column;
    height: 100%;
  }

  .profile {
    width: 35%;
    padding: 0;
    border: 1em solid var(--primary-color);
    background-color: var(--primary-color);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 100%;
      border-radius: 1em;
    }
  }

  .biography {
    width: 70%;
    height: 100%;
    padding: 1em;
    /* border-radius: 1em; */
    padding-top: 3em;
    gap: 3.5rem;

    align-items: left;
    flex-direction: row;
    justify-content: space-around;
    text-align: left;

    border-left: 0.5em solid var(--secondary-color);
    /* border-bottom: 0.5em solid var(--secondary-color); */

    .listMedias {
      position: sticky;
      flex-direction: row;
    }
    .textArea {
      width: 40%;
      gap: 1em;
      /* background-color: var(--white-color); */

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
`;

export const SectionTechs = styled(motion.section)`
  background: rgb(29, 59, 54);
  background: linear-gradient(
    90deg,
    rgba(29, 59, 54, 1) 0%,
    rgba(14, 15, 14, 1) 100%
  );

  .message {
    border-radius: 0 15em 15em 0;
    width: 75%;
    /* background-image: linear-gradient(#2c595290, #2c595290, #2c595290),
      url("https://cdn.discordapp.com/attachments/844198019104243743/1061353468977217626/jackson-sophat-wUbNvDTsOIc-unsplash_copiar.png"); */

    background-color: var(--tertiary-color);
  }

  @media (max-width: 767px) {
    flex-direction: column;
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
    border-radius: 15em 0 0 15em;
    width: 75%;
    /* background-image: linear-gradient(#2c595290, #2c595290, #2c595290),
      url("https://cdn.discordapp.com/attachments/844198019104243743/1061353469463769108/jackson-sophat-_t-l5FFH8VA-unsplash_copiar.png"); */
    background-color: var(--tertiary-color);
  }

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const SectionForm = styled(motion.section)`
  background-color: var(--primary-color);
  align-items: center;

  .message {
    border-radius: 0 15em 15em 0;
    width: 75%;
    /* background-image: linear-gradient(#2c595290, #2c595290, #2c595290),
      url("https://cdn.discordapp.com/attachments/844198019104243743/1061353469941911612/jackson-sophat-JTucHiLel5U-unsplash_copiar.png"); */
    background-color: var(--tertiary-color);
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
