import * as styled from "./styles";
import { motion } from "framer-motion";
import { PropagateLoader } from "react-spinners";
import { LoadingContext } from "../../../../context/LoadingContext/LoadingContext";
import { useContext } from "react";
import { IChildren } from "../../../interfaces/global/globalInterfaces";

import Icon from "../../../../assets/images/me/myIcon.jpeg";

export const LoadingsProducer = ({ children }: IChildren) => {
  const { loading } = useContext(LoadingContext);

  return loading ? (
    <styled.LoadingStyled>
      <motion.img src={Icon} alt="Loading Portfolio" />
      <PropagateLoader color="#1d3b36" loading size={20} speedMultiplier={1} />
    </styled.LoadingStyled>
  ) : (
    <>{children}</>
  );
};
