import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainBtn from "../buttons/MainBtn";
import { motion } from "motion/react";
import { heroBtns } from "../../data/btns";

export default function CTAButtons() {
  const sharedCTAStyle = "hover:scale-110 font-medium text-sm px-3 w-34 gap-1";

  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
      viewport={{ once: true }}
      className="center gap-5 my-5"
    >
      {heroBtns.map((btn) => (
        <MainBtn key={btn.title} link={btn.link} classes={`${btn.classes} ${sharedCTAStyle}`}>
          <FontAwesomeIcon icon={btn.icon} />
          <span>{btn.title}</span>
        </MainBtn>
      ))}
    </motion.div>
  );
}
