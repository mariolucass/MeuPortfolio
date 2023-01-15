import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectList = styled(motion.ul)`
  width: 75%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  flex-wrap: wrap;

  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;

  color: var(--black-color);

  li {
    width: 30%;
    height: 40%;

    position: relative;
    display: block;

    border-radius: 8px 8px var(--curve) var(--curve);
    overflow: hidden;

    img {
      width: 100%;
      object-fit: contain;
    }

    :hover .hover_div {
      transform: translateY(0);
    }

    :hover .header_div {
      transform: translateY(0);
    }
  }

  @media (max-width: 1891px) {
    li {
      height: 35%;
    }
  }

  @media (max-width: 1573px) {
    li {
      height: 37.5%;
      width: 45%;
    }
  }

  @media (max-width: 1411px) {
    li {
      height: 30%;
    }
  }

  @media (max-width: 1253px) {
    li {
      height: 27.5%;
    }
  }

  @media (max-width: 1089px) {
    li {
      width: 75%;
      min-height: 35%;
    }

    p {
      display: block;
    }
  }

  @media (max-width: 768px) {
    li {
      width: 75%;
      min-height: 40%;
    }
  }

  @media (max-width: 1024px) {
    li {
      height: 31.5%;
    }
  }
`;

export const LinkStyled1 = styled(motion.a)`
  width: 128px;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid transparent;
  border-radius: 0.3em;

  background-color: var(--button-color);

  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: var(--buttonHover-color);
  }

  :active {
    background-color: var(--buttonActive-color);
  }
`;

export const HoverDiv = styled(motion.div)`
  height: 90%;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  border-radius: calc(var(--curve) * 1px);
  background-color: var(--tertiary-color);

  transform: translateY(100%);
  transition: 0.2s ease-in-out;

  @media (max-width: 1441px) {
    padding: 0px;

    p {
      display: none;
    }

    div {
    }
  }
`;

export const HeaderDiv = styled(motion.div)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2em;

  border-radius: var(--curve) 0 0 0;
  background-color: var(--tertiary-color);

  transform: translateY(-100%);
  transition: 0.2s ease-in-out;

  h3 {
    margin: 0 0 0.3em;

    font-size: 1em;

    color: var(--white-color);
  }

  svg {
    width: 80px;
    height: 80px;

    position: absolute;
    bottom: 100%;
    right: 0;
    z-index: 1;
  }

  svg path {
    fill: var(--tertiary-color);
  }

  .header_image {
    width: 24px;
    height: 24px;
    display: flex;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const LinksDiv = styled(motion.div)`
  width: 100%;

  display: flex;
  justify-content: space-around;

  gap: 1em;
`;

export const DescriptionDiv = styled(motion.div)`
  height: 80%;

  display: flex;
  justify-content: space-around;
  /* align-items: flex-end; */
  flex-direction: column;

  margin: 0;
  padding: 2em;
  padding-top: 1em;
  gap: 1em;

  overflow: hidden;

  border-radius: 0px 0px var(--curve) var(--curve);
  background-color: var(--primary-color);

  p {
    text-align: start;
    text-overflow: ellipsis;
    width: 75%;
  }
`;