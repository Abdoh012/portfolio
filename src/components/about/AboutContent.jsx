import SectionTitle from "../SectionTitle";
import Paragraph from "./paragraph";
import Skills from "./Skills";

export default function AboutContent() {
  return (
    <div className="flex flex-col gap-3 md:flex md:justify-between md:flex-row md:gap-10">
      <SectionTitle initial={{ x: -40 }} animation={{ x: 0 }}>
        <Paragraph>
          I'm a junior React front-end developer with about 1 year of experience
          building modern web applications (You can take a look at my projects).
          I specialize in React, JavaScript, and creating exceptional user
          experiences.
        </Paragraph>
        <Paragraph>
          My goal is always to focus on writing clean, maintainable code while
          delivering performant and responsive interfaces that users love to
          interact with.
        </Paragraph>
        <Paragraph>
          While my experience may be limited, my pricing reflects that. I'm
          confident that the quality of my work matches that of large companies
          and professional projects—just give it a try and you'll see..
        </Paragraph>
      </SectionTitle>

      <Skills />
    </div>
  );
}
