import Section from "../components/Section";
import Content from "../components/about/Content";

export default function About() {
  return (
    <Section
      headerTitle="About Me"
      id="about"
      classes="bg-secondary-color"
      containerWd="max-w-4xl"
    >
      <Content />
    </Section>
  );
}
