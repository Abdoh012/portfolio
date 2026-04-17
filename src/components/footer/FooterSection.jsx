import MotionWrapper from "../motion/MotionWrapper";
import FooterHeaders from "./FooterHeaders";

export default function FooterSection({ title, children, ...props }) {
  return (
    <MotionWrapper element="div" duration={0.5} {...props}>
      <FooterHeaders title={title} />
      {children}
    </MotionWrapper>
  );
}
