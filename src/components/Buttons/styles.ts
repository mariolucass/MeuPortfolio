import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface IProps {
  variation?: "primary" | "secondary" | "tertiary" | "quaternary";
}

const typeButton = {
  primary: css`
    width: 72px;
    height: 72px;
    font-size: 32px;

    background-color: var(--button-color);
    color: var(--white-color);
    border: 2px solid transparent;

    :hover {
      background-color: var(--buttonHover-color);
    }

    :active {
      background-color: var(--buttonActive-color);
    }
  `,

  secondary: css`
    width: 50px;
    height: 60px;
    font-size: 20px;

    background-color: var(--white-color);
    color: var(--primary-color);

    :hover {
      transition: 0.5s;

      background-color: var(--white-color);
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
    }
  `,

  tertiary: css`
    width: 140px;
    height: 48px;
    font-size: 14px;

    background-color: var(--primary-color);
    color: var(--white-color);

    :hover {
      transition: 0.5s;

      background-color: var(--white-color);
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
    }
  `,

  quaternary: css`
    width: 140px;
    height: 48px;
    font-size: 16px;

    background-color: var(--white-color);
    color: var(--primary-color);

    :hover {
      transition: 0.5s;

      background-color: transparent;
      border: 2px solid var(--white-color);
      color: var(--white-color);
    }
  `,
};
export const styleButton = styled(motion.button)<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  transition: 0.5s;
  cursor: pointer;

  ${({ variation }) => typeButton[variation || "primary"]};
`;
