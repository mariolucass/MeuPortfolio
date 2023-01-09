import * as styled from "./styles";
import { motion } from "framer-motion";
import { useProjectContext } from "../../context/ProjectContext/ProjectsContext";

export const ListProjects = () => {
  const { projects } = useProjectContext();

  const listVercel = [
    { name: "BurguerKenzie", url: "https://burguerkenzie-xi.vercel.app" },
    { name: "KenzieHub", url: "https://kenziehub-henna-seven.vercel.app" },
    { name: "NuKenzie", url: "https://nukenzie-wheat.vercel.app" },
  ];

  const listImg = [
    {
      name: "BurguerKenzie",
      url: "https://live.staticflickr.com/65535/52616062139_698c62722e_b.jpg",
    },
    {
      name: "KenzieHub",
      url: "https://live.staticflickr.com/65535/52615799046_2ac69fbcf7_b.jpg",
    },
    {
      name: "NuKenzie",
      url: "https://live.staticflickr.com/65535/52616233340_fdc18e7790_b.jpg",
    },
    {
      name: "ProjetoEmpresas",
      url: "https://live.staticflickr.com/65535/52615290012_82b6c17341_b.jpg",
    },
    {
      name: "ProjetoEcommerce01",
      url: "https://live.staticflickr.com/65535/52616233415_a0dc097363_b.jpg",
    },
    {
      name: "ProjetoTreeter",
      url: "https://live.staticflickr.com/65535/52615798971_537a143b84_b.jpg",
    },
  ];

  const liProjects = projects.map((item) => {
    const elem = listImg.find((elem) => elem.name === item.name);

    if (elem) {
      item.img = elem.url;
    }

    if (!item.has_pages) {
      const elem = listVercel.find((elem) => elem.name === item.name);

      if (elem) {
        item.vercel = elem.url;
      }
    }

    if (item.name !== "mariolucass") {
      return (
        <motion.li key={item.id}>
          <motion.img src={item.img} alt={item.name} className="card__image" />

          <styled.HoverDiv className="hover_div">
            <styled.HeaderDiv className="header_div">
              <motion.svg xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
              </motion.svg>

              <motion.h3>{item.name}</motion.h3>
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
    }
  });

  return <styled.ProjectList>{liProjects}</styled.ProjectList>;
};
