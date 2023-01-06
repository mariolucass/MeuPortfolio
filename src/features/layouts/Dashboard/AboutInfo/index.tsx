import * as styled from "./styles";
import { motion } from "framer-motion";

export const AboutInfo = () => (
  <>
    <motion.h2>
      Quem sou eu?
      <motion.div></motion.div>
    </motion.h2>

    <styled.listInfo>
      <motion.li>
        <motion.h4>NOME:</motion.h4>
        <motion.span> Mário Lucas</motion.span>
      </motion.li>
      <motion.li>
        <motion.h4>E-MAIL:</motion.h4>
        <motion.span> mariolasdev@gmail.com</motion.span>
      </motion.li>
      <motion.li>
        <motion.h4>DATA DE NASCIMENTO:</motion.h4>
        <motion.span> 25/07/2002</motion.span>
      </motion.li>
    </styled.listInfo>

    <motion.p>
      Desenvolvedor Front-End em busca de uma vaga no mercado, tenho 6 meses de
      experiência com a criação de diversos projetos usuais e efetivos visando o
      atual Mercado de trabalho, com experiências em HTML5, CSS3, JavaScript,
      React, TypeScript, além de experiências comunicativas e de Code Reviews.
    </motion.p>
  </>
);
