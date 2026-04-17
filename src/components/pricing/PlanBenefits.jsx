import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function PlanBenefits({ benefits }) {
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-3 mb-6 flex-1 mt-3"
    >
      {benefits.map((benefit) => (
        <motion.li
          key={benefit}
          variants={itemVariants}
          className="flex items-center gap-3"
        >
          <FontAwesomeIcon
            className="text-green-600"
            icon="fa-solid fa-check"
          />
          <span>{benefit}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
