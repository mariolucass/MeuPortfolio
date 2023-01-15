import * as styled from "./styles";
import * as layouts from "../../layouts";
import * as components from "../../../components";
import * as databases from "../../database";
import * as framerStyles from "../../libs/FramerMotion/styles";
import * as transitions from "../../libs/FramerMotion/transitions";
import * as animations from "../../libs/FramerMotion/animations";

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
                href={databases.Users[0].curriculo}
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
        <motion.div className="message" style={style2(isInView1)}>
          <motion.div>
            <motion.img
              src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/fcf7fd0c619bb87706533079240915f3.gif"
              alt=""
            />
          </motion.div>
        </motion.div>

        <motion.div className="info" style={style1(isInView1)}>
          <layouts.Images list={databases.Techs} />
        </motion.div>
      </styled.SectionTechs>

      <styled.SectionProjects ref={ref2} style={style3(isInView2)}>
        <motion.div className="mainDiv">
          <layouts.ProjectsImageList />

          <motion.div className="linkProjects">
            <components.Link to="/projects"> Projetos </components.Link>
          </motion.div>
        </motion.div>
      </styled.SectionProjects>

      <styled.SectionForm ref={ref3}>
        <motion.div className="info" style={style2(isInView3)}>
          <layouts.Images
            list={databases.Contacts}
            initial={animations.animateHidden}
            animate={animations.animateShowing}
            transition={transitions.transitionSpring}
          />
        </motion.div>

        <motion.div className="message" style={style1(isInView3)}>
          <layouts.FormDashboard />
        </motion.div>
      </styled.SectionForm>
    </styled.Main>
  );
};
