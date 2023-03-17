import { motion } from "framer-motion";
import { useState } from "react";

import * as styled from "./styles";
import * as transitions from "../../features/libs/FramerMotion/transitions";
import * as animations from "../../features/libs/FramerMotion/animations";
import * as variants from "../../features/libs/FramerMotion/variants";

interface ITechsImageList {
  title: string;
  list: Array<any>;
}

export const TechsInfoList = ({ title, list }: ITechsImageList) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const toggleOpen = () => setIsOpen(!isOpen);
  const hoverIndex = (index: number) => {
    if (index == -1) {
      return setHoveredIndex(-1);
    } else {
      return setHoveredIndex(index);
    }
  };

  const techs = list.map((elem: any, index) => {
    const isHovered = index !== hoveredIndex;

    const animateHandlerParagraph = !isHovered
      ? animations.animateShowing
      : animations.animateHidden;

    return (
      <motion.li
        key={elem.name}
        onHoverStart={() => hoverIndex(index)}
        onHoverEnd={() => hoverIndex(-1)}
        animate={!isHovered ? "open" : "closed"}
      >
        <motion.h4>{elem.name}</motion.h4>
        <motion.p
          animate={animateHandlerParagraph}
          initial={animations.animateNone}
          transition={transitions.transitionSpring}
          variants={variants.techsVariant}
        >
          {elem.description}
        </motion.p>
      </motion.li>
    );
  });

  return (
    <styled.DivTechs>
      <motion.h2>{title}</motion.h2>
      <motion.ul>{techs}</motion.ul>
    </styled.DivTechs>
  );
};
