import MotionWrapper from "./motion/MotionWrapper";

export default function Header({ title }) {
  return (
    <MotionWrapper
      element="h2"
      initial={{ y: 30 }}
      animation={{ y: 0 }}
      className="text-4xl font-bold mb-8 text-center"
    >
      {title}
    </MotionWrapper>
  );
}
