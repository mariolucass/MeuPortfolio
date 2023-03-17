import * as styled from "./styles";

import { motion } from "framer-motion";

export const AboutInfo = () => (
  <>
    <motion.h2>
      Sobre mim
      <motion.div></motion.div>
    </motion.h2>

    <styled.listInfo>
      <motion.li>
        <motion.h4>NOME:</motion.h4>
        <motion.span>Mário Lucas</motion.span>
      </motion.li>
      <motion.li>
        <motion.h4>E-MAIL:</motion.h4>
        <motion.span>mariolasdev@gmail.com</motion.span>
      </motion.li>
    </styled.listInfo>
  </>
);
