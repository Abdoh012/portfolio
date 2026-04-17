import { socialLinks } from "../../data/social-links";
import MotionWrapper from "../motion/MotionWrapper";
import Link from "./Link";

export default function SocialLinks({ iconStyle, delay, classes }) {
  return (
    <MotionWrapper
      element="ul"
      delay={delay || 0}
      className={`${classes ? classes : ""} flex gap-3 text-2xl`}
    >
      {socialLinks.map((link) => (
        <Link key={link.id} {...link} iconStyle={iconStyle} />
      ))}
    </MotionWrapper>
  );
}
