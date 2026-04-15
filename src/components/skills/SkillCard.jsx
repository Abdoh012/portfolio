import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionWrapper from "../motion/MotionWrapper";

export default function SkillCard(props) {
  return (
    <MotionWrapper
      element="li"
      initial={{ scale: 0.7 }}
      animation={{ scale: 1 }}
      className="flex flex-col bg-white justify-center gap-6 border-[#0000001a] rounded-xl border hover:shadow-xl h-60 p-6 hover:rotate-[2deg] sm:hover:scale-[103%] hover:scale-105 duration-300 "
    >
      <div>
        <FontAwesomeIcon
          className={`${props.iconColor} text-3xl`}
          icon={props.icon}
        />
      </div>
      <h4 className="font-medium">{props.title}</h4>
      <div className="muted-text">{props.description}</div>
    </MotionWrapper>
  );
}
