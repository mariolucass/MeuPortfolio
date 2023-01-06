import { motion } from "framer-motion";
import { PropagateLoader } from "react-spinners";
import { LoadingStyled } from "./styles";
import Icon from "../../../../assets/myIcon.jpeg";

export const Loading = () => {
  return (
    <LoadingStyled>
      <motion.img src={Icon} alt="Loading Portfolio" />
      <PropagateLoader color="#1d3b36" loading size={20} speedMultiplier={1} />
    </LoadingStyled>
  );
};
