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

      <styled.ContainerDiv id="idInitial">
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
                `Experiência sólida em HTML, CSS, JavaScript, além de frameworks como React.Meus objetivos são: adquirir conhecimentos de forma gradual e me aperfeicoar nas minhas habilidades.`,
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
