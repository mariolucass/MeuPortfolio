import * as styled from "./styles";
import { motion } from "framer-motion";

interface ICardProject {
  img: string;
  title: string;
  description: string;
  vercel: string;
  github: string;
}

interface IListProject {
  list: ICardProject[];
}

export const ListProjects = ({ list }: IListProject) => {
  const liProjects = list.map((item) => (
    <motion.li>
      <motion.div>
        <motion.img src={item.img} alt={item.title} />
      </motion.div>

      <motion.div>
        <motion.span>{item.title}</motion.span>
        <motion.p>{item.description}</motion.p>
      </motion.div>

      <motion.div>
        <motion.a href={item.vercel}></motion.a>
        <motion.a href={item.github}></motion.a>
      </motion.div>
    </motion.li>
  ));

  return <styled.ProjectList>{liProjects}</styled.ProjectList>;
};
