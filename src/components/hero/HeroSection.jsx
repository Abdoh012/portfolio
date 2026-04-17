import MotionWrapper from "../motion/MotionWrapper";

export default function HeroSection({ children, delay, className, element }) {
  return (
    <MotionWrapper
      initial={{ y: 50 }}
      animation={{ y: 0 }}
      delay={delay || 0}
      element={element}
      className={className}
    >
      {children}
    </MotionWrapper>
  );
}
