import * as styled from "./styles";
import * as layouts from "../..";
import * as animations from "../../../libs/FramerMotion/animations";
import * as transitions from "../../../libs/FramerMotion/transitions";
import * as database from "../../../database";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useProjectContext } from "../../../../context/ProjectContext/ProjectsContext";

export const ListProjectsBackEnd = () => {
  const { projects } = useProjectContext();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const defaultImage =
    "https://live.staticflickr.com/65535/52775566948_f4ca9647f6_k.jpg";

  const listWithBackEnd = projects.filter((item) => {
    return database.Projects.listBackEnd.find((elem) => elem === item.name);
  });

  const liProjects = listWithBackEnd.map((item) => {
    const elemDiagram = database.Projects.listDiagrams.find(
      (elem) => elem.name === item.name
    );

    item.diagram = "";
    item.img = defaultImage;

    const findImageUrlTech = (elemName: string) => {
      const elem = database.Techs.find((elem) => elem.name === elemName);
      return elem!.img;
    };

    const renderTechs = () => {
      const listExpress = database.Projects.listExpress;

      const isExpressElement = listExpress.find((elem) => elem === item.name);

      if (isExpressElement) {
        return (
          <>
            <motion.img src={findImageUrlTech("Express")} alt="Express" />
            <motion.img src={findImageUrlTech("TypeScript")} alt="TypeScript" />
            <motion.img src={findImageUrlTech("Postgresql")} alt="Postgresql" />
          </>
        );
      } else {
        return (
          <>
            <motion.img src={findImageUrlTech("Python")} alt="Python" />
            <motion.img src={findImageUrlTech("Django")} alt="Django" />
            <motion.img src={findImageUrlTech("Postgresql")} alt="Postgresql" />
          </>
        );
      }
    };

    const RenderDiagram = () => (
      <styled.LinkStyled1 href={item.diagram} target={"_blank"}>
        Diagrama
      </styled.LinkStyled1>
    );

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
              {/* <RenderDiagram /> */}

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
