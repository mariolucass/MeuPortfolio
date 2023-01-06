import { motion } from "framer-motion";
import { VscActivateBreakpoints } from "react-icons/vsc";
import * as styled from "./styles";

export const AboutParticulars = () => {
  const list = ["Foco", "Dedicação", "Organização", "Comunicação"];

  const renderList = list.map((elem) => (
    <motion.li key={elem}>
      <VscActivateBreakpoints />
      <motion.span>{elem}</motion.span>
    </motion.li>
  ));

  return (
    <>
      <motion.h2>
        Meus pontos fortes:
        <motion.div></motion.div>
      </motion.h2>
      <styled.listParticulars>{renderList}</styled.listParticulars>
    </>
  );
};
