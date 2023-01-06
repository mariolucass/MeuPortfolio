import * as layouts from "../../layouts";
import * as styled from "./styles";
import * as components from "../../../components";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import * as framerStyles from "../../libs/FramerMotion/styles";
import Profile from "../../../assets/profile.jpeg";
import { Techs } from "../../database/Techs";
import { Projects } from "../../database/Projects";
import { useLoadingContext } from "../../../context/LoadingContext/LoadingContext";
import { listUser } from "../../database/User";

export const Dashboard = () => {
  const { loading } = useLoadingContext();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView2 = useInView(ref2);
  const isInView1 = useInView(ref1);
  const isInView3 = useInView(ref3);

  return (
    <styled.Main>
      <layouts.Header />

      <layouts.Welcome />

      <styled.SectionAbout>
        <motion.div className="avatar">
          <motion.img src={Profile} alt="Profile" />
        </motion.div>

        <motion.div className="biography">
          <motion.div className="textArea">
            <layouts.AboutInfo />
            <components.ListMedias list={listUser} />

            <layouts.AboutParticulars />
          </motion.div>
        </motion.div>
      </styled.SectionAbout>

      <styled.SectionTechs ref={ref1}>
        <motion.div
          className="message"
          style={
            isInView1 ? framerStyles.style2Hidden : framerStyles.style2Show
          }
        ></motion.div>

        <motion.div
          className="info"
          style={
            isInView1 ? framerStyles.style1Hidden : framerStyles.style1Show
          }
        >
          <motion.div>
            <motion.h2>Minha habilidades.</motion.h2>
          </motion.div>

          <layouts.Images list={Techs} />

          <components.Link to={"/techs"}>Tecnologias</components.Link>
        </motion.div>
      </styled.SectionTechs>

      <styled.SectionProjects ref={ref2}>
        <motion.div
          className="info"
          style={
            isInView2 ? framerStyles.style2Hidden : framerStyles.style2Show
          }
        >
          <layouts.Images list={Projects} />

          <components.Link to={"/projects"}>Projetos</components.Link>
        </motion.div>

        <motion.div
          className="message"
          style={
            isInView2 ? framerStyles.style1Hidden : framerStyles.style1Show
          }
        >
          <motion.div>
            <motion.h2>Meus projetos.</motion.h2>
          </motion.div>
        </motion.div>
      </styled.SectionProjects>

      <styled.SectionForm ref={ref3}>
        <motion.div
          className="formDiv"
          style={
            isInView3 ? framerStyles.style3Hidden : framerStyles.style3Show
          }
        >
          <layouts.FormDashboard />
        </motion.div>
        <motion.div
          className="greetings"
          style={
            isInView3 ? framerStyles.style3Hidden : framerStyles.style3Show
          }
        >
          <motion.h2>Gostaria de me mandar um feedback? Aqui está...</motion.h2>
        </motion.div>
      </styled.SectionForm>

      <layouts.Footer />
    </styled.Main>
  );
};
