import * as styled from "./styles";
import * as layouts from "../../";
import * as animations from "../../../libs/FramerMotion/animations";
import * as transitions from "../../../libs/FramerMotion/transitions";
import * as database from "../../../database";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useProjectContext } from "../../../../context/ProjectContext/ProjectsContext";
interface ListProjectsProps {
  filter: string;
}

export const ListProjects = ({ filter }: ListProjectsProps) => {
  const { projects } = useProjectContext();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const liProjects = projects.map((item) => {
    const elemExists = database.Projects.listImg.find(
      (elem) => elem.name === item.name
    );
    if (elemExists) {
      item.img = elemExists.url;
    }

    if (!item.has_pages) {
      const elemHasVercel = database.Projects.listVercel.find(
        (elem) => elem.name === item.name
      );
      if (elemHasVercel) {
        item.vercel = elemHasVercel.url;
      }
    }

    const findImageUrlTech = (elemName: string) => {
      const elem = database.Techs.find((elem) => elem.name === elemName);
      return elem!.img;
    };

    const renderTechs = () => {
      const listVercel = database.Projects.listVercel;

      const isVercelElement = listVercel.find(
        (elem) => elem.name === item.name
      );

      if (isVercelElement) {
        return (
          <>
            <motion.img src={findImageUrlTech("HTML5")} alt="HTML5" />
            <motion.img src={findImageUrlTech("React")} alt="React" />
            <motion.img src={findImageUrlTech("TypeScript")} alt="TypeScript" />
          </>
        );
      } else {
        return (
          <>
            <motion.img src={findImageUrlTech("HTML5")} alt="HTML5" />
            <motion.img src={findImageUrlTech("CSS3")} alt="CSS3" />
            <motion.img src={findImageUrlTech("JavaScript")} alt="JavaScript" />
          </>
        );
      }
    };

    const renderPageUrl = () => {
      if (item.has_pages) {
        return (
          <styled.LinkStyled1
            href={`https://mariolucass.github.io/${item.name}/`}
            target={"_blank"}
          >
            Página
          </styled.LinkStyled1>
        );
      } else {
        return (
          <styled.LinkStyled1 href={item.vercel} target={"_blank"}>
            Página
          </styled.LinkStyled1>
        );
      }
    };

    const itemDescription = item.description
      ? item.description
      : "Esse item ainda não tem descricão.";

    return (
      <motion.li key={item.id} whileHover={{ scale: 0.9 }}>
        <motion.img src={item.img} alt={item.name} className="card__image" />

        <styled.HoverDiv className="hover_div">
          <styled.HeaderDiv className="header_div">
            <motion.svg xmlns="http://www.w3.org/2000/svg">
              <motion.path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
            </motion.svg>

            <layouts.AnimatedText text={item.name} inView={isInView} />
            <motion.div className="header_image">{renderTechs()}</motion.div>
          </styled.HeaderDiv>

          <styled.DescriptionDiv>
            <motion.p>{itemDescription}</motion.p>

            <styled.LinksDiv>
              {renderPageUrl()}
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
