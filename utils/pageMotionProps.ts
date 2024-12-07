// utils/pageMotionProps.ts
import PAGE_TRANSITION from "./pageTransitionsVars";

export const pageMotionProps = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: PAGE_TRANSITION.DURATION,
      delay: PAGE_TRANSITION.DURATION,
      ease: PAGE_TRANSITION.EASE,
    },
  },
};
