import * as styled from "./styles";
import { motion } from "framer-motion";

interface ITechsImageList {
  title: string;
  list: Array<any>;
}

export const TechsInfoList = ({ title, list }: ITechsImageList) => {
  const techs = list.map((elem: any) => {
    return (
      <motion.li>
        <motion.h4>{elem.name}</motion.h4>
        <motion.p>{elem.description}</motion.p>
      </motion.li>
    );
  });

  return (
    <styled.DivTechs>
      <motion.h2>{title}</motion.h2>

      <motion.ul>{techs}</motion.ul>
    </styled.DivTechs>
  );
};
