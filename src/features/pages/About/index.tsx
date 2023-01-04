import * as styled from "./styles";
import * as layouts from "../../layouts";

import { motion } from "framer-motion";
import { ListMedias } from "../../../components";

export const About = () => {
  return (
    <styled.Main>
      <layouts.Header />

      <styled.SectionInfos>
        <motion.h2>Quem sou eu?</motion.h2>

        <styled.BioDiv>
          <p></p>
        </styled.BioDiv>

        <styled.ObjectivesDiv>
          <p></p>
        </styled.ObjectivesDiv>

        <motion.div>
          <ListMedias />
        </motion.div>
      </styled.SectionInfos>
    </styled.Main>
  );
};
