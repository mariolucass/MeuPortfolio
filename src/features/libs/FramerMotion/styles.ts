export const variants = {
  variantA: {
    scale: 1,
  },
  variantB: {
    scale: 0.8,
  },
};

export const styleProjectsHidden = {
  transform: "none",
  opacity: 1,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const styleProjectsShow = {
  transform: "translateX(200px)",
  opacity: 0,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const styleTechsHidden = {
  transform: "none",
  opacity: 1,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const styleTechsShow = {
  transform: "translateX(-200px)",
  opacity: 0,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};
