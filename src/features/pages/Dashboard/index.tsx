import * as layouts from "../../layouts";
import * as styled from "./styles";
import * as contexts from "../../../context";
import * as components from "../../../components";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { variants } from "../../libs/FramerMotion/styles";
import { LinkStyled } from "../../../components/Links/styles";

export const Dashboard = () => {
  // const { technologies } = contexts.useTechContext();
  // const { projects } = contexts.useProjectContext();

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <styled.Main ref={scrollRef}>
      <layouts.Header />
      <layouts.Welcome />

      <styled.SectionAbout>
        <motion.div>
          <h2>Conheca mais sobre mim</h2>
        </motion.div>
        <motion.div className="information"></motion.div>
      </styled.SectionAbout>

      <styled.SectionTechs>
        <motion.div
          className="message"
          variants={variants}
          initial={"variantA"}
          whileHover={"variantB"}
          ref={ref1}
        >
          <motion.div
            style={{
              transform: isInView1 ? "none" : "translateX(-200px)",
              opacity: isInView1 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <motion.h2>Conheca sobre tecnologias que tenho.</motion.h2>
          </motion.div>
        </motion.div>

        {/* <layouts.Images array={technologies} /> */}

        <motion.div className="link">
          <components.Link to={"/techs"}>Tecnologias</components.Link>
        </motion.div>
      </styled.SectionTechs>

      <styled.SectionEmail>
        <layouts.FormDashboard />
        <motion.div>
          <h2>Gostou do meu trabalho?!, me manda um e-mail :)</h2>
        </motion.div>
      </styled.SectionEmail>

      <styled.SectionProjects>
        <motion.div
          className="link"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
        >
          <components.Link to={"/projects"}>Projetos</components.Link>
        </motion.div>
        {/* <layouts.Images array={projects} /> */}

        <motion.div
          className="message"
          ref={ref2}
          variants={variants}
          initial={"variantA"}
          whileHover={"variantB"}
        >
          <motion.div
            style={{
              transform: isInView2 ? "none" : "translateX(200px)",
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <motion.h2>Conheca alguns dos meus projetos</motion.h2>
          </motion.div>
        </motion.div>
      </styled.SectionProjects>

      <layouts.Footer />
    </styled.Main>
  );
};
