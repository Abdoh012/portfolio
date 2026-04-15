import FooterSection from "../components/footer/FooterSection";
import Heart from "../components/footer/Heart";
import QuickLinks from "../components/footer/QuickLinks";
import SocialLinks from "../components/social-links/SocialLinks";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <FooterSection
            initial={{ x: -50 }}
            animation={{ x: 0 }}
            title="Abdelrahman Mohammed"
          >
            <p className="text-gray-400">
              Front-end Developer and i would love to work with you
            </p>
          </FooterSection>

          <FooterSection
            initial={{ y: -20 }}
            animation={{ y: 0 }}
            title="Quick Links"
          >
            <QuickLinks />
          </FooterSection>

          <FooterSection
            initial={{ x: 50 }}
            animation={{ x: 0 }}
            title="Connect"
          >
            <SocialLinks iconStyle="text-gray-400 hover:text-white" />
          </FooterSection>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm md:text-base text-center text-gray-400">
          <p className="flex justify-center items-center gap-2">
            Made with <Heart /> by Abdoh Mohammed © 2026
          </p>
        </div>
      </div>
    </div>
  );
}
