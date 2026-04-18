import MotionWrapper from "../motion/MotionWrapper";
import FooterHeader from "./FooterHeader";

export default function FooterSection({ title, children, ...props }) {
  return (
    <MotionWrapper element="div" duration={0.5} {...props}>
      <FooterHeader title={title} />
      {children}
    </MotionWrapper>
  );
}
