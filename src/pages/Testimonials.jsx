import Content from "../components/Content";
import Section from "../components/Section";
import TestimonialsContainer from "../components/testimonials/TestimonialsContainer";

export default function Testimonials() {
  const description = `A few words from the people I've built with — teammates who were there for the code, the deadlines, and everything in between.`;

  return (
    <Section
      headerTitle="What People Say"
      id="testimonials"
      classes="bg-secondary-color"
      containerWd="max-w-6xl"
    >
      <Content description={description}>
        <TestimonialsContainer />
      </Content>
    </Section>
  );
}