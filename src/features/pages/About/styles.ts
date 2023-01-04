import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.main)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  section {
    width: 100%;
    margin: 0 auto;
    height: 800px;
    padding: 1rem;
    border-radius: 0.5em;
    display: flex;
  }
`;

export const SectionInfos = styled(motion.section)`
  background: rgb(29, 59, 54);
  background: linear-gradient(
    90deg,
    rgba(29, 59, 54, 1) 0%,
    rgba(14, 15, 14, 1) 100%
  );
`;

export const BioDiv = styled(motion.div)``;

export const ObjectivesDiv = styled(motion.div)``;
