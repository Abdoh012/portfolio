import MotionWrapper from "./motion/MotionWrapper";

export default function SectionTitle({ children, classes, ...rest }) {
  return (
    <MotionWrapper {...rest} element="div" className={`${classes} muted-text`}>
      {children}
    </MotionWrapper>
  );
}
