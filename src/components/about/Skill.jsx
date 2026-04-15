import MotionWrapper from "../motion/MotionWrapper";

export default function Skill({ title }) {
  return (
    <MotionWrapper
      element="li"
      initial={{ scale: 0.5 }}
      animation={{ scale: 1 }}
      className="w-fit hover:scale-110 duration-300 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg cursor-default"
    >
      {title}
    </MotionWrapper>
  );
}
