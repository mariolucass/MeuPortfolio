import * as styled from "./styles";
import * as layouts from "../../";
import * as animations from "../../../libs/FramerMotion/animations";
import * as transitions from "../../../libs/FramerMotion/transitions";
import * as database from "../../../database";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { useProjectContext } from "../../../../context/ProjectContext/ProjectsContext";

export const ListProjects = () => {
  const { projects } = useProjectContext();
  const ref = useRef(null);
  const isInView = useInView(ref);

  console.log(projects);

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

            <layouts.AnimatedText text={item.name} inView={isInView} />
            <motion.div className="header_image">
              <motion.img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                alt=""
              />

              {database.Projects.listVercel.find(
                (e) => e.name === item.name
              ) ? (
                <>
                  <motion.img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt=""
                  />
                  <motion.img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                    alt=""
                  />
                </>
              ) : (
                <>
                  <motion.img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                    alt=""
                  />
                  <motion.img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                    alt=""
                  />
                </>
              )}
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
      ref={ref}
    >
      {liProjects}
    </styled.ProjectList>
  );
};
