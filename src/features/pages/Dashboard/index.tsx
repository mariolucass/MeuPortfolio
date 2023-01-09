import * as styled from "./styles";
import * as layouts from "../../layouts";
import * as components from "../../../components";
import * as databases from "../../database";
import * as framerStyles from "../../libs/FramerMotion/styles";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Profile from "../../../assets/images/me/profile.jpeg";

export const Dashboard = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView = useInView(ref);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  const style1 = (isInView: boolean) => {
    return isInView ? framerStyles.styleHidden : framerStyles.style1Show;
  };
  const style2 = (isInView: boolean) => {
    return isInView ? framerStyles.styleHidden : framerStyles.style2Show;
  };

  const style3 = (isInView: boolean) => {
    return isInView ? framerStyles.styleHidden : framerStyles.style3Show;
  };

  return (
    <styled.Main>
      <layouts.Header />

      <layouts.Welcome />

      <styled.SectionAbout ref={ref}>
        <motion.div className="profile">
          <motion.img src={Profile} alt="Profile" />
        </motion.div>

        <motion.div className="biography">
          <motion.div className="textArea">
            <layouts.AboutInfo />

            <motion.div className="mediaArea">
              <components.ListMedias list={databases.Users} />

              <motion.a
                className="link"
                href="https://drive.google.com/file/d/1CspiN7QQnC4GrAbhSd_PqVoP6h2jiyT0/view?usp=sharing"
                target={"_blank"}
              >
                Currículo
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="particularsArea">
            <layouts.AboutParticulars />
          </motion.div>
        </motion.div>
      </styled.SectionAbout>

      <styled.SectionTechs ref={ref1}>
        <motion.div className="message highFont" style={style2(isInView1)}>
          {/* <layouts.AnimatedText text="HABILIDADES" inView={isInView1} /> */}
        </motion.div>

        <motion.div className="info" style={style1(isInView1)}>
          <layouts.Images list={databases.Techs} />
        </motion.div>
      </styled.SectionTechs>

      <styled.SectionProjects ref={ref2}>
        <motion.div className="info" style={style2(isInView2)}>
          {/* <layouts.Images list={databases.Projects} /> */}

          <components.Link to={"/projects"}>Projetos</components.Link>
        </motion.div>

        <motion.div className="message highFont" style={style1(isInView2)}>
          {/* <layouts.AnimatedText text="PROJETOS" inView={isInView2} /> */}
        </motion.div>
      </styled.SectionProjects>

      <styled.SectionForm ref={ref3}>
        <motion.div className="message highFont" style={style2(isInView3)}>
          {/* <layouts.AnimatedText text="CONTATOS" inView={isInView3} /> */}
        </motion.div>

        <motion.div className="info" style={style1(isInView3)}>
          <layouts.ImageListMessages />
          <layouts.FormDashboard />
        </motion.div>
      </styled.SectionForm>

      {/* <layouts.Footer /> */}
    </styled.Main>
  );
};
