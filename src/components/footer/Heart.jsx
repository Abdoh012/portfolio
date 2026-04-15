import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function Heart() {
  return (
    <motion.span
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="text-red-500"
    >
      <FontAwesomeIcon icon="fa-solid fa-heart" />
    </motion.span>
  );
}
