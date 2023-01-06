import * as styled from "./styles";
import * as layouts from "../..";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const Welcome = () => {
  return (
    <styled.WelcomeDiv>
      <layouts.ReverseDivAnimated />

      <styled.ContainerDiv>
        <styled.TextDiv
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 4,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
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

          <motion.div className="paragraph">
            <motion.h2>Desenvolvedor Front-End.</motion.h2>

            <TypeAnimation
              sequence={[
                ` Experiência em React, JavaScript e procurando emprego na área de Front-End, tenho como objetivo superar obstáculos, adquirir conhecimentos e resolver problemas.`,
                200,
              ]}
              speed={40}
              wrapper="p"
            />
          </motion.div>
        </styled.TextDiv>

        <layouts.IconDivs />
      </styled.ContainerDiv>

      <layouts.DivAnimated />
    </styled.WelcomeDiv>
  );
};
