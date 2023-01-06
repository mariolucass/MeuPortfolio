import * as styled from "./styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/logo.png";

export const Header = () => (
  <styled.Nav>
    <styled.LogoDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link to={"/"}>
        <motion.img src={Logo} />
      </Link>
    </styled.LogoDiv>

    <motion.div>
      <motion.ul>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to={"/projects"}>Projetos</Link>

          <motion.div />
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to={"/techs"}>Tecnologias</Link>

          <motion.div />
        </motion.li>
      </motion.ul>
    </motion.div>
  </styled.Nav>
);
