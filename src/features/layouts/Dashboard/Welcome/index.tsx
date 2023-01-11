import * as styled from "./styles";
import * as layouts from "../..";
import * as transitions from "../../../libs/FramerMotion/transitions";
import * as animations from "../../../libs/FramerMotion/animations";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

export const Welcome = () => {
  return (
    <styled.WelcomeDiv>
      <layouts.ReverseDivAnimated />

      <styled.ContainerDiv>
        <styled.TextDiv
          initial={animations.animateHidden}
          animate={animations.animateShowing}
          transition={transitions.transitionSpring}
        >
          <motion.div className="principalName">
            <motion.h1>
              Olá, eu sou o
              <TypeAnimation
                sequence={[` Mário!`, 200]}
                speed={10}
                wrapper="span"
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
