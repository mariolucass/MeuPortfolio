import * as styled from "./styles";

import { motion } from "framer-motion";

export const AboutParticulars = () => {
  const list = [
    "Dedicação",
    "Organização",
    "Comunicação",
    "Foco",
    "Honestidade",
    "Curiosidade",
  ];

  const renderList = list.map((elem) => (
    <motion.li key={elem}>
      <motion.span>{elem}</motion.span>
    </motion.li>
  ));

  return (
    <>
      <motion.h2>
        Qualidades
        <motion.div></motion.div>
      </motion.h2>
      <styled.listParticulars>{renderList}</styled.listParticulars>
    </>
  );
};
