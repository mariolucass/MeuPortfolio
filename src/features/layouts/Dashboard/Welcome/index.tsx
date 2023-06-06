import * as layouts from "../..";
import * as animations from "../../../libs/FramerMotion/animations";
import * as transitions from "../../../libs/FramerMotion/transitions";
import * as styled from "./styles";

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
            <motion.h2>Desenvolvedor Full-Stack.</motion.h2>

            <TypeAnimation
              sequence={[
                `Desenvolvedor full stack com experiência em JavaScript, TypeScript, React, Node.js, Express, PostgreSQL, Git e metodologias ágeis como Scrum e Kanban. Também possuo conhecimentos em UX, TDD com Jest e construção de APIs RESTful.`,
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
