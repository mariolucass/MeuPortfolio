import * as styled from "./styles";
import { motion } from "framer-motion";
import Logo from "../../../../assets/images/me/logo.png";

export const Header = () => (
  <styled.Nav>
    <styled.LogoDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <styled.LinkStyled to={"/"}>
        <motion.img src={Logo} />
      </styled.LinkStyled>
    </styled.LogoDiv>

    <motion.div>
      <motion.ul>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <styled.LinkStyled to={"/projects"}>Projetos</styled.LinkStyled>
          <motion.div />
        </motion.li>

        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <styled.LinkStyled to={"/techs"}>Habilidades</styled.LinkStyled>
          <motion.div />
        </motion.li>
      </motion.ul>
    </motion.div>
  </styled.Nav>
);
