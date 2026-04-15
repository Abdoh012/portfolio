import { motion } from "motion/react";

export default function MotionWrapper(props) {
  const MotionComponent = motion[props.element];

  return (
    <MotionComponent
      initial={{ ...props.initial, opacity: 0 }}
      whileInView={{ opacity: 1, ...props?.animation }}
      transition={{
        ease: "easeOut",
        duration: props.duration || 0.3,
        delay: props?.delay || 0,
        origin: 0,
      }}
      viewport={{ once: true }}
      className={props?.className}
      onClick={props?.handleClick}
    >
      {props?.children}
    </MotionComponent>
  );
}
