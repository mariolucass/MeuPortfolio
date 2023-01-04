import * as styled from "./styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <styled.Nav>
      <div>
        <Link to={"/"}>
          <h1>MarioLucas</h1>
        </Link>
      </div>

      <div>
        <ul>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>

          <li>
            <Link to={"/techs"}>Techs</Link>
          </li>

          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </styled.Nav>
  );
};
