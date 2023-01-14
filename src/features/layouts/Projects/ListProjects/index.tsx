import * as styled from "./styles";
import * as animations from "../../../libs/FramerMotion/animations";
import * as transitions from "../../../libs/FramerMotion/transitions";
import * as database from "../../../database";

import { motion } from "framer-motion";

import { useProjectContext } from "../../../../context/ProjectContext/ProjectsContext";

export const ListProjects = () => {
  const { projects } = useProjectContext();

  const liProjects = projects.map((item) => {
    const elem = database.Projects.listImg.find(
      (elem) => elem.name === item.name
    );

    if (elem) {
      item.img = elem.url;
    }

    if (!item.has_pages) {
      const elem = database.Projects.listVercel.find(
        (elem) => elem.name === item.name
      );

      if (elem) {
        item.vercel = elem.url;
      }
    }

    return (
      <motion.li key={item.id} whileHover={{ scale: 0.9 }}>
        <motion.img src={item.img} alt={item.name} className="card__image" />

        <styled.HoverDiv className="hover_div">
          <styled.HeaderDiv className="header_div">
            <motion.svg xmlns="http://www.w3.org/2000/svg">
              <motion.path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
            </motion.svg>

            <motion.h3>{item.name}</motion.h3>
            <motion.div className="header_image">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                alt=""
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                alt=""
              />
            </motion.div>
          </styled.HeaderDiv>

          <styled.DescriptionDiv>
            <motion.p>
              {item.description
                ? item.description
                : "Esse item ainda não tem descricão."}
            </motion.p>

            <styled.LinksDiv>
              {item.has_pages ? (
                <styled.LinkStyled1
                  href={`https://mariolucass.github.io/${item.name}/`}
                  target={"_blank"}
                >
                  Página
                </styled.LinkStyled1>
              ) : (
                <styled.LinkStyled1 href={item.vercel} target={"_blank"}>
                  Página
                </styled.LinkStyled1>
              )}

              <styled.LinkStyled1 href={item.svn_url} target={"_blank"}>
                Repositório
              </styled.LinkStyled1>
            </styled.LinksDiv>
          </styled.DescriptionDiv>
        </styled.HoverDiv>
      </motion.li>
    );
  });

  return (
    <styled.ProjectList
      initial={animations.animateHidden}
      animate={animations.animateShowing}
      transition={transitions.transitionAccordion}
    >
      {liProjects}
    </styled.ProjectList>
  );
};
