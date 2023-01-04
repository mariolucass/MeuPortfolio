import * as styled from "./styles";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface IList {}

export const ListMedias = ({ list }: any) => {
  // const list = [
  //   {
  //     id: 1,
  //     nome: "Mário Lucas",
  //     img: "https://avatars.githubusercontent.com/u/105565220?v=4",
  //     linkedin: "https://www.linkedin.com/in/mariolucass/",
  //     github: "https://github.com/mariolucass",
  //   },
  // ];

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
