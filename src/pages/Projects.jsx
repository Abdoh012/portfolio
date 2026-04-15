import Content from "../components/Content";
import Section from "../components/Section";
import ProjectsContainer from "../components/projects/ProjectsContainer";

export default function Projects() {
  const description =
    "Here are some of my recent projects that showcase my skills in web development, UI/UX design, and problem-solving.";
  return (
    <Section
      headerTitle="Featured Projects"
      id="projects"
      containerWd="max-w-6xl"
    >
      <Content description={description}>
        <ProjectsContainer />
      </Content>
    </Section>
  );
}
