import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectList = styled(motion.ul)`
  display: flex;
  width: 75%;
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
  color: var(--black-color);
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-around;

  li {
    width: 35%;
    position: relative;
    display: block;
    height: 400px;
    border-radius: 8px 8px var(--curve) var(--curve);
    overflow: hidden;
    text-decoration: none;

    img {
      width: 100%;
      object-fit: contain;
    }

    h3 {
      font-size: 1em;
      margin: 0 0 0.3em;
      color: #6a515e;
    }

    :hover .hover_div {
      transform: translateY(0);
    }

    :hover .header_div {
      transform: translateY(0);
    }
  }
`;

export const LinkStyled1 = styled(motion.a)`
  background-color: var(--button-color);
  width: 128px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 0.3em;
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
  height: 80%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc(var(--curve) * 1px);
  background-color: var(--tertiary-color);
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
`;

export const HeaderDiv = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2em;
  border-radius: calc(var(--curve) * 1px) 0 0 0;
  background-color: var(--tertiary-color);
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;

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
`;

export const LinksDiv = styled(motion.div)`
  width: 75%;
  display: flex;
  justify-content: flex-end;
  gap: 1em;
`;

export const DescriptionDiv = styled(motion.div)`
  height: 50%;
  margin: 0;
  color: #d7bdca;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 2em;
  gap: 1em;
`;
