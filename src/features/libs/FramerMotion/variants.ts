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
