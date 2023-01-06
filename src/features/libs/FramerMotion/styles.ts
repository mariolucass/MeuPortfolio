export const variants = {
  variantA: {
    scale: 1,
  },
  variantB: {
    scale: 0.8,
  },
};

export const style1Hidden = {
  transform: "none",
  opacity: 1,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const style1Show = {
  transform: "translateX(200px)",
  opacity: 0,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const style2Hidden = {
  transform: "none",
  opacity: 1,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const style2Show = {
  transform: "translateX(-200px)",
  opacity: 0,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const style3Hidden = {
  transform: "none",
  opacity: 1,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const style3Show = {
  transform: "translateY(200px)",
  opacity: 0,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};
