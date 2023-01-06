import * as styled from "./styles";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IListMedias } from "../../features/interfaces/components/ListMedias";

export const ListMedias = ({ list }: any) => {
  const liMedia = list.map((elem: any) => (
    <motion.li key={elem.id}>
      <motion.div className="social">
        <motion.a href={elem.linkedin} target="_blank">
          <AiFillLinkedin style={{ color: "var(--white-color)" }} size={50} />
        </motion.a>

        <motion.a href={elem.github} target="_blank">
          <AiFillGithub size={50} style={{ color: "var(--white-color)" }} />
        </motion.a>
      </motion.div>
    </motion.li>
  ));

  return <styled.MediaUl className="listMedias">{liMedia}</styled.MediaUl>;
};
