import MotionWrapper from "../motion/MotionWrapper";

export default function Name() {
  return (
    <MotionWrapper
      initial={{ y: 50 }}
      animation={{ y: 0 }}
      element="h1"
      className="text-primary-gradient text-3xl md:text-5xl font-bold text-center"
    >
      Hi, I'm Abdelrahman Mohammed
    </MotionWrapper>
  );
}
