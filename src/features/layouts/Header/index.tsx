import * as styled from "./styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Header = () => (
  <styled.Nav>
    <motion.div>
      <Link to={"/"}>
        <motion.h1>MarioLucas</motion.h1>
      </Link>
    </motion.div>

    <motion.div>
      <motion.ul>
        <motion.li>
          <Link to={"/projects"}>Projects</Link>
        </motion.li>

        <motion.li>
          <Link to={"/techs"}>Techs</Link>
        </motion.li>

        <motion.li>
          <Link to={"/about"}>About</Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  </styled.Nav>
);
