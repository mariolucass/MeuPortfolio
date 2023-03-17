export const animateHidden = {
  opacity: 0,
  scale: 0.5,
  transition: {
    duration: 1.5,
    type: "spring",
    ease: [0.2, 0.65, 0.3, 0.9],
  },
};

export const animateNone = {
  display: "none",
};

export const animateShowing = {
  opacity: 1,
  scale: 1,
  transition: {
    duration: 1.5,
    type: "spring",
    ease: [0.2, 0.65, 0.3, 0.9],
  },
};

export const animate360 = { rotate: 360 };
export const animate180 = { rotate: 180 };
export const animate90 = { rotate: 90 };
export const animate45 = { rotate: 45 };
