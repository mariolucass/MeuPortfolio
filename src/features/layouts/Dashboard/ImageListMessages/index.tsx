import * as styled from "./styles";

import { motion } from "framer-motion";

import Letter from "../../../../assets/images/icons/letter.png";
import Message from "../../../../assets/images/icons/message.png";
import Contacts from "../../../../assets/images/icons/profiles.png";

export const ImageListMessages = () => {
  return (
    <>
      <motion.div className="greetingsImg">
        <styled.DivImages className="divImg">
          <motion.img src={Letter} alt="Letter" />
        </styled.DivImages>
        <styled.DivImages>
          <motion.img src={Message} alt="Message" />
        </styled.DivImages>
        <styled.DivImages>
          <motion.img src={Contacts} alt="Contacts" />
        </styled.DivImages>
      </motion.div>
    </>
  );
};
