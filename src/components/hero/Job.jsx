import MotionWrapper from "../motion/MotionWrapper";

export default function Job() {
  return (
    <MotionWrapper
      element="div"
      initial={{ y: 50 }}
      animation={{ y: 0 }}
      delay={0.3}
      className="text-xl text-gray-600 text-center my-5"
    >
      Frontend React Developer
    </MotionWrapper>
  );
}
