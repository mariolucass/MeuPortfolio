import * as styled from "./styles";
import * as transitions from "../../../libs/FramerMotion/transitions";
import * as animations from "../../../libs/FramerMotion/animations";
import * as variants from "../../../libs/FramerMotion/variants";

import { Avatar } from "@mui/material";

import Icon from "../../../../assets/images/me/myIcon.jpeg";

export const IconDivs = () => (
  <styled.PrincipalDiv
    animate={animations.animate360}
    transition={transitions.transitionAccordion}
    drag
    dragDirectionLock
    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
    dragElastic={0.5}
  >
    <styled.QuinaryDiv
      whileTap="tap"
      whileHover="hover"
      variants={variants.iconVariants}
    >
      <styled.QuaternaryDiv
        variants={variants.iconVariants}
        initial={animations.animateHidden}
        animate={animations.animateShowing}
        transition={transitions.transitionSpring}
      >
        <styled.TertiaryDiv
          variants={variants.iconVariants}
          initial={animations.animateHidden}
          animate={animations.animateShowing}
          transition={transitions.transitionSpring}
        >
          <styled.SecondaryDiv variants={variants.iconVariants}>
            <styled.PrimaryDiv variants={variants.iconVariants}>
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
