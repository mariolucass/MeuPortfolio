import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectList = styled(motion.ul)`
  display: flex;
  gap: 2rem;
  margin: 2%;
  padding: 0;
  list-style-type: none;
  height: 75%;
  /* overflow-y: hidden; */
  width: 80%;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;

  li {
    position: relative;
    display: block;
    width: 30%;
    height: 85%;
    border-radius: 55px 55px 55px 55px;
    overflow: hidden;
    text-decoration: none;
    border: 2px solid var(--grey1-color);
    /* background-color: var(--white-color); */

    img {
      width: 100%;
    }

    .divOverlay {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      background-color: var(--primary-color);
      transform: translateY(100%);
      gap: 0rem;
      transition: 0.2s ease-in-out;

      .divTitle {
        position: relative;
        display: flex;
        align-items: center;
        gap: 2em;
        padding: 2em;
        border-radius: calc(44 * 1px) 0 0 0;
        background-color: var(--primary-color);
        transform: translateY(-100%);
        margin-bottom: 0;

        transition: 0.2s ease-in-out;
      }

      .divInfo {
        min-height: 90%;
        padding: 0 2em 2em;
        margin: 0;
        display: flex;
        text-align: left;
        flex-direction: column;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        background-color: var(--primary-color);
        transform: translateY(-50%);
        padding-top: 1em;

        p {
          text-align: left;
          width: 100%;
          height: 45%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 25%;
        }

        .divButton {
          background-color: var(--grey-color);
          position: relative;
          right: 0;
          width: 100%;
          height: 5em;
          display: flex;
          justify-content: space-around;
          gap: 1rem;
          align-items: center;
          padding: 0.2em;
          border-radius: 2em;
          margin-top: 5%;

          a {
            background-color: var(--button-color);
            width: 24%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid transparent;
            border-radius: 0.3em;
            font-weight: bold;

            :hover {
              background-color: var(--buttonHover-color);
            }

            :active {
              background-color: var(--buttonActive-color);
            }
          }
        }
      }
    }

    :hover .divOverlay {
      transform: translateY(0);
      transition: 0.2s ease-in-out;
    }

    :hover .divText {
      transform: translateY(0);
      border: 5px solid var(--secondary-color);
      transition: 0.2s ease-in-out;
    }
  }
`;
