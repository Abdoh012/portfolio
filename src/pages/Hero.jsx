import Name from "../components/hero/Name";
import Job from "../components/hero/Job";
import Description from "../components/hero/Description";
import CTAButtons from "../components/hero/CTAButtons";
import SocialLinks from "../components/social-links/SocialLinks";

export default function hero() {
  return (
    <section id="hero" className="min-h-screen center bg-white">
      <div className="container px-5">
        {/* My name */}
        <Name />

        {/* Job */}
        <Job />

        {/* Description about me */}
        <Description />

        {/* Contact and my work */}
        <CTAButtons />

        {/* Social links */}
        <SocialLinks
          center={true}
          iconStyle="text-gray-600 hover:text-gray-900"
        />
      </div>
    </section>
  );
}
