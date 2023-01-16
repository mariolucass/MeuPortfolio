import * as transitions from "./transitions";

export const iconVariants = {
  tap: {
    scale: 0.95,
    transition: {
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
    },
  },

  hover: {
    scale: 1.005,
  },
};

export const textVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: transitions.transitionText,
  },
};

export const letterVariant = {
  hidden: {
    opacity: 0,
    y: `1.5em`,
  },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: transitions.transitionLetter,
  },
};
