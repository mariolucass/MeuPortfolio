import * as styled from "./styles";
import { motion } from "framer-motion";
import { PropagateLoader } from "react-spinners";
import Icon from "../../../../assets/myIcon.jpeg";

export const Loading = () => {
  return (
    <styled.LoadingStyled>
      <motion.img src={Icon} alt="Loading Portfolio" />
      <PropagateLoader color="#1d3b36" loading size={20} speedMultiplier={1} />
    </styled.LoadingStyled>
  );
};
