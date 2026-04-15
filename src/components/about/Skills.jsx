import { skills } from "../../data/about-skills";
import MotionWrapper from "../motion/MotionWrapper";
import Skill from "./Skill";

export default function Skills() {
  return (
    <MotionWrapper element="div" initial={{ x: 40 }} animation={{ x: 0 }}>
      <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Skill key={skill.title} title={skill.title} />
        ))}
      </ul>
    </MotionWrapper>
  );
}
