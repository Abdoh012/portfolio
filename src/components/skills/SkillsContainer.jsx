import { skills } from "../../data/skills";
import SkillCard from "./SkillCard";

export default function SkillsContainer() {
    
  return (
    <ul className="flex flex-col gap-6 md:grid-cols-2 md:grid">
      {skills.map((skill) => (
        <SkillCard key={skill.title} {...skill} />
      ))}
    </ul>
  );
}
