import { socialLinks } from "../../data/social-links";
import MotionWrapper from "../motion/MotionWrapper";
import Link from "./Link";

export default function SocialLinks({ iconStyle, center }) {
  return (
    <MotionWrapper
      element="ul"
      delay={center && 1}
      className={`${center && "center"} flex gap-3 text-2xl`}
    >
      {socialLinks.map((link) => (
        <Link
          key={link.id}
          icon={link.iconTitle}
          link={link.link}
          iconStyle={iconStyle}
        />
      ))}
    </MotionWrapper>
  );
}
