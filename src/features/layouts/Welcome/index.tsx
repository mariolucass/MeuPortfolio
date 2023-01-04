import * as styled from "./styles";
import * as layouts from "..";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const Welcome = () => {
  return (
    <styled.WelcomeDiv>
      <layouts.ReverseDivAnimated />

      <motion.div className="container">
        <motion.div className="textArea">
          <motion.div className="principalName">
            <motion.h1>
              Olá, eu sou o
              <TypeAnimation
                sequence={[` Mario!`, 200, ""]}
                speed={10}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.h1>
          </motion.div>

          <motion.h2>Desenvolvedor Front-End.</motion.h2>

          <motion.p>
            Experiência em React, JavaScript e procurando emprego na área de
            Front-End, tenho como objetivo superar obstáculos, adquirir
            conhecimentos e resolver problemas.
          </motion.p>
        </motion.div>

        <layouts.IconDivs />
      </motion.div>

      <layouts.DivAnimated />
    </styled.WelcomeDiv>
  );
};
