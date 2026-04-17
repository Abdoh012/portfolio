import CTAButtons from "../components/hero/CTAButtons";
import SocialLinks from "../components/social-links/SocialLinks";
import HeroSection from "@/components/hero/HeroSection";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen center bg-white">
      <div className="container px-5">
        {/* My name */}
        <HeroSection
          element="h1"
          className="text-primary-gradient text-3xl md:text-5xl font-bold text-center"
        >
          Hi, I'm Abdelrahman Mohammed
        </HeroSection>

        {/* Job */}
        <HeroSection
          element="div"
          delay={0.3}
          className="text-xl text-gray-600 text-center my-5"
        >
          A Frontend React Developer
        </HeroSection>

        {/* Description about me */}
        <HeroSection
          element="div"
          delay={0.6}
          className="text-center muted-text text-lg my-5"
        >
          I create beautiful, functional, user-centered web pages experiences.
          <br />
          And don't forget about the maintenance service
        </HeroSection>

        {/* Contact and my work */}
        <CTAButtons />

        <SocialLinks
          classes="center"
          delay={1}
          iconStyle="text-gray-600 hover:text-gray-900"
        />
      </div>
    </section>
  );
}
