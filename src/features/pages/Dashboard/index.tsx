import * as styled from "./styles";
import * as layouts from "../../layouts";
import * as components from "../../../components";
import * as databases from "../../database";
import * as framerStyles from "../../libs/FramerMotion/styles";
import Profile from "../../../assets/profile.jpeg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Dashboard = () => {
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
        <motion.div className="profile">
          <motion.img src={Profile} alt="Profile" />
        </motion.div>

        <motion.div className="biography">
          <motion.div className="textArea">
            <layouts.AboutInfo />
            <components.ListMedias list={databases.Users} />

            <motion.a className="link">Meu Curriculo</motion.a>

            <layouts.AboutParticulars />
          </motion.div>
        </motion.div>
      </styled.SectionAbout>

      <styled.SectionTechs ref={ref1}>
        <motion.div className="message">
          <layouts.AnimatedText text="Habilidades" inView={isInView1} />
        </motion.div>

        <motion.div
          className="info"
          style={isInView1 ? framerStyles.styleHidden : framerStyles.style1Show}
        >
          <layouts.Images list={databases.Techs} />

          <components.Link to={"/techs"}>Habilidades</components.Link>
        </motion.div>
      </styled.SectionTechs>

      <styled.SectionProjects ref={ref2}>
        <motion.div
          className="info"
          style={isInView2 ? framerStyles.styleHidden : framerStyles.style2Show}
        >
          <layouts.Images list={databases.Projects} />

          <components.Link to={"/projects"}>Projetos</components.Link>
        </motion.div>

        <motion.div className="message">
          <layouts.AnimatedText text="Projetos" inView={isInView2} />
        </motion.div>
      </styled.SectionProjects>

      <styled.SectionForm ref={ref3}>
        <motion.div
          className="formDiv"
          style={isInView3 ? framerStyles.styleHidden : framerStyles.style3Show}
        >
          <layouts.FormDashboard />
        </motion.div>
        <motion.div
          className="greetings"
          style={isInView3 ? framerStyles.styleHidden : framerStyles.style3Show}
        >
          <motion.h2>Gostaria de me mandar um feedback? Aqui está...</motion.h2>
        </motion.div>
      </styled.SectionForm>

      <layouts.Footer />
    </styled.Main>
  );
};
