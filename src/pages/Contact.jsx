import ContactContainer from "../components/contact/ContactContainer";
import Content from "../components/Content";
import Section from "../components/Section";

export default function Contact() {
  const description = `Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.`;

  return (
    <Section
      headerTitle="Get In Touch"
      id="contact"
      classes="bg-white"
      containerWd="max-w-6xl"
    >
      <Content description={description}>
        <ContactContainer />
      </Content>
    </Section>
  );
}
