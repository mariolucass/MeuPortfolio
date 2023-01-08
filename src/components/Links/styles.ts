import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  background-color: var(--button-color);
  width: 128px;
  height: 64px;
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
`;
