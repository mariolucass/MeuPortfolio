import * as styled from "./styles";
import { motion } from "framer-motion";
import { useProjectContext } from "../../context/ProjectContext/ProjectsContext";

import profile from "../../assets/images/me/profile.jpeg";

export const ListProjects = () => {
  const { projects } = useProjectContext();

  const listVercel = [
    { name: "BurguerKenzie", url: "https://burguerkenzie-xi.vercel.app" },
    { name: "KenzieHub", url: "https://kenziehub-henna-seven.vercel.app" },
    { name: "NuKenzie", url: "https://nukenzie-wheat.vercel.app" },
  ];

  const liProjects = projects.map((item) => {
    if (!item.has_pages) {
      const elem = listVercel.find((elem) => elem.name === item.name);
      console.log(elem);

      if (elem) {
        item.vercel = elem.url;
      }
    }

    console.log(item.date);

    if (item.name !== "mariolucass") {
      return (
        <motion.li key={item.id}>
          <motion.img src={profile} alt={item.name} />

          <motion.div className="divOverlay">
            <motion.div className="divTitle">
              <motion.h3>{item.name}</motion.h3>
            </motion.div>

            <motion.div className="divInfo">
              <motion.h4> Descrição:</motion.h4>
              <motion.p>
                {item.description ? item.description : "Ainda não há descrição"}
              </motion.p>

              <motion.div className="divButton">
                {item.has_pages ? (
                  <motion.a
                    href={`https://mariolucass.github.io/${item.name}/`}
                    target="_blank"
                  >
                    Página
                  </motion.a>
                ) : (
                  <motion.a href={item.vercel} target="_blank">
                    Página
                  </motion.a>
                )}

                <motion.a href={item.svn_url} target="_blank">
                  Repositório
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.li>
      );
    }
  });

  return <styled.ProjectList>{liProjects}</styled.ProjectList>;
};
