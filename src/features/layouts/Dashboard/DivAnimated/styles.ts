import { motion } from "framer-motion";
import styled from "styled-components";
import Wave from "../../../../assets/images/backgrounds/wave.svg";
import ReverseWave from "../../../../assets/images/backgrounds/waveReverse.svg";

export const Div = styled(motion.div)`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${Wave});
  background-repeat: repeat-x;
  background-size: contain;
  background-position: center;
  animation: animatedBackground 10s linear infinite alternate;

  @keyframes animatedBackground {
    from {
      background-size: contain;
      background-position: 0% 22%;
    }
    to {
      background-size: contain;
      background-position: 100% 22%;
    }
  }
`;

export const ReverseDiv = styled(motion.div)`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(360deg);

  background-image: url(${ReverseWave});
  background-repeat: repeat-x;
  background-size: contain;
  background-position: center;
  animation: animatedBackground 10s linear infinite alternate;

  @keyframes animatedBackground {
    from {
      background-size: contain;
      background-position: 0% 22%;
    }
    to {
      background-size: contain;
      background-position: 100% 22%;
    }
  }
`;
