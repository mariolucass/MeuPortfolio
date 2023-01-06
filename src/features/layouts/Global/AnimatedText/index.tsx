import * as styled from "./styles";
import * as variant from "../../../libs/FramerMotion/variants";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

interface IAnimatedProps {
  text: string;
  inView: boolean;
}

export const AnimatedText = ({ text, inView }: IAnimatedProps) => {
  const animations = useAnimation();

  useEffect(() => {
    if (inView) {
      animations.start("visible");
    }
    if (!inView) {
      animations.start("hidden");
    }
  }, [animations, inView]);

  const textCharactersAnimated = text.split("").map((character, index) => (
    <styled.AnimatedTextCharacter key={index} variants={variant.letterVariant}>
      {character}
    </styled.AnimatedTextCharacter>
  ));

  return (
    <styled.AnimatedTextTitle
      variants={variant.textVariant}
      animate={animations}
    >
      {textCharactersAnimated}
    </styled.AnimatedTextTitle>
  );
};
