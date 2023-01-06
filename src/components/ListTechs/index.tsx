import * as styled from "./styles";
import { motion } from "framer-motion";
import { IListTechs } from "../../features/interfaces/components/ListHabilities";

export const ListTechs = ({ list }: IListTechs) => {
  const liTechs = list.map((item) => (
    <motion.li>
      <motion.div>
        <motion.img src={item.img} alt={item.title} />
      </motion.div>

      <motion.div>
        <motion.span>{item.title}</motion.span>
        <motion.p>{item.description}</motion.p>
      </motion.div>
    </motion.li>
  ));

  return <styled.TechsList>{liTechs}</styled.TechsList>;
};
