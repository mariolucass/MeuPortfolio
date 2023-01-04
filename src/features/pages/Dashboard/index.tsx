import * as layouts from "../../layouts";
import * as styled from "./styles";
import * as contexts from "../../../context";
import * as components from "../../../components";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  styleProjectsHidden,
  styleProjectsShow,
  styleTechsHidden,
  styleTechsShow,
} from "../../libs/FramerMotion/styles";

export const Dashboard = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInView2 = useInView(ref2);
  const isInView1 = useInView(ref1);

  return (
    <styled.Main>
      <layouts.Header />

      <layouts.Welcome />

      <styled.SectionAbout>
        <motion.div className="greetings">
          <h2>Conheca mais sobre mim</h2>
        </motion.div>
        <motion.div className="information"></motion.div>
      </styled.SectionAbout>

      <styled.SectionTechs
        style={isInView1 ? styleTechsHidden : styleTechsShow}
      >
        <motion.div className="message" ref={ref1}>
          <motion.div style={isInView1 ? styleTechsHidden : styleTechsShow}>
            <motion.h2>Conheca sobre tecnologias que tenho.</motion.h2>
          </motion.div>
        </motion.div>

        <motion.div className="info">
          {/* <layouts.Images array={technologies} /> */}
          <components.Link to={"/techs"}>Tecnologias</components.Link>
        </motion.div>
      </styled.SectionTechs>

      <styled.SectionForm>
        <layouts.FormDashboard />
        <motion.div className="greetings">
          <motion.h2>Gostaria de me mandar um feedback? Aqui está...</motion.h2>
        </motion.div>
      </styled.SectionForm>

      <styled.SectionProjects
        style={isInView2 ? styleProjectsHidden : styleProjectsShow}
      >
        <motion.div className="info">
          {/* <layouts.Images list={listUser} /> */}

          <components.Link to={"/projects"}>Projetos</components.Link>
        </motion.div>

        <motion.div className="message" ref={ref2}>
          <motion.div
            style={isInView2 ? styleProjectsHidden : styleProjectsShow}
          >
            <motion.h2>Conheca alguns dos meus projetos</motion.h2>
          </motion.div>
        </motion.div>
      </styled.SectionProjects>

      <layouts.Footer />
    </styled.Main>
  );
};
