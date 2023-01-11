import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  width: 128px;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

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
`;
