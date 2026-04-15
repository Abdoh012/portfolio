import Section from "../components/Section";
import Content from "../components/Content";
import SkillsContainer from "../components/skills/SkillsContainer";

export default function Skills() {
  const description = `A comprehensive skill set covering the front end of modern web development, from design to deployment.`;

  return (
    <Section
      headerTitle="Skills & Expertise"
      id="skills"
      containerWd="max-w-6xl"
      classes="bg-secondary-color"
    >
      <Content description={description}>
        <SkillsContainer />
      </Content>
    </Section>
  );
}
