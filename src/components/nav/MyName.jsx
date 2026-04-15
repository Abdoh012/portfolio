import { motion } from "motion/react";

export default function MyName() {
  return <motion.h2
    whileHover={{ scale: 1.2 }}
    transition={{ duration: 0.3 }}
    className="text-primary-gradient font-bold text-2xl cursor-pointer"
  >
    AM
  </motion.h2>;
}
