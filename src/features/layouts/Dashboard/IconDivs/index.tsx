import { motion } from "framer-motion";
import * as styled from "./styles";
import Icon from "../../../../assets/myIcon.jpeg";
import { Avatar } from "@mui/material";
import { iconVariants } from "../../../libs/FramerMotion/variants";

export const IconDivs = () => (
  <styled.PrincipalDiv
    animate={{ rotate: 360 }}
    transition={{
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
      delay: 0.2,
    }}
  >
    <styled.QuinaryDiv
      whileTap="tap"
      whileHover="hover"
      variants={iconVariants}
    >
      <styled.QuaternaryDiv
        variants={iconVariants}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 4,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <styled.TertiaryDiv
          variants={iconVariants}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 4,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <styled.SecondaryDiv variants={iconVariants}>
            <styled.PrimaryDiv variants={iconVariants}>
              <styled.DivIcon>
                <Avatar className="icon" src={Icon} />
              </styled.DivIcon>
            </styled.PrimaryDiv>
          </styled.SecondaryDiv>
        </styled.TertiaryDiv>
      </styled.QuaternaryDiv>
    </styled.QuinaryDiv>
  </styled.PrincipalDiv>
);
