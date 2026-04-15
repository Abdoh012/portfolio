import MotionWrapper from "../motion/MotionWrapper";

export default function Description() {
  return (
    <MotionWrapper
      className="text-center muted-text text-lg my-5"
      element="div"
      initial={{ y: 50 }}
      animation={{ y: 0 }}
      delay={0.6}
    >
      I create beautiful, functional, user-centered web pages experiences. And
      don't forget about
      <br /> the maintenance service
    </MotionWrapper>
  );
}
