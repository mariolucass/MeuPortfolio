export const transitionSpring = {
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
};

export const transitionLetter = {
  duration: 1,
  ease: [0.2, 0.65, 0.3, 0.9],
};

export const transitionText = {
  delay: 1,
  staggerChildren: 0.08,
};

export const transitionAccordion = {
  type: "spring",
  damping: 10,
  mass: 0.75,
  stiffness: 100,
  delay: 0.2,
};
