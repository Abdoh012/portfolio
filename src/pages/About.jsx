import Section from "../components/Section";
import AboutContent from "../components/about/AboutContent";

export default function About() {
  return (
    <Section
      headerTitle="About Me"
      id="about"
      classes="bg-secondary-color"
      containerWd="max-w-4xl"
    >
      <AboutContent />
    </Section>
  );
}
