export const fadeInFromBottom = {
  initial: { opacity: 0, y: 50, transition: { duration: 0.5 } },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const appearTop = {
  hidden: { opacity: 0, y: [-50, -20, -10, 0], transition: { duration: 0.5 } },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const appearBot = {
  hidden: { opacity: 0, y: [50, 20, 10, 0], transition: { duration: 0.5 } },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const appearRight = {
  hidden: { opacity: 0, x: [50, 20, 10, 0], transition: { duration: 0.5 } },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const appearLeft = {
  hidden: {
    opacity: 0,
    x: [-50, -20, -10, 0],
    transition: { duration: 0.5 },
  },
  shown: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const modalVariant = {
  initial: { opacity: 0, x: 1000 },
  shown: {
    opacity: 1,
    x: 0,
    display: "block",
    transition: { duration: 0.5 },
  },
  hidden: {
    opacity: 0,
    x: 1000,
    transition: { duration: 0.5 },
  },
};

export const variantType = {
  TOP: appearTop,
  BOTTOM: appearBot,
  RIGHT: appearRight,
  LEFT: appearLeft,
};

export const woobleVariant = {
  visible: { y: 0, scaleY: 1 },
  hover: {
    scaleY: [1, 1.3, 0.8, 1, 1],
    color: "red",
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const listItem = {
  hidden: { opacity: 0, y: -20, scaleY: 0 },
  show: { opacity: 1, y: 0, scaleY: 1 },
};

export const heroArrow = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

export const projectContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const projectItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
