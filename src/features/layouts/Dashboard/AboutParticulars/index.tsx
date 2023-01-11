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
      <styled.LeftDiv />

      <styled.LeftDiv2 />

      <motion.span>{elem}</motion.span>

      <styled.RightDiv2 />

      <styled.RightDiv />
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
