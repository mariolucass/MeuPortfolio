import * as styled from "./styles";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface IListMedias {}

export const ListMedias = ({ list }: any) => {
  const liMedia = list.map((elem: any) => (
    <motion.li key={elem.id}>
      <Avatar src={elem.img} sx={{ width: 256, height: 256 }} />

      <motion.div className="social">
        <motion.a href={elem.linkedin} target="_blank">
          <AiFillLinkedin size={50} />
        </motion.a>

        <motion.a href={elem.github} target="_blank">
          <AiFillGithub size={50} />
        </motion.a>
      </motion.div>
    </motion.li>
  ));

  return <styled.MediaUl>{liMedia}</styled.MediaUl>;
};
