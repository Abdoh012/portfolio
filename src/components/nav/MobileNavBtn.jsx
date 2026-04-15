import { motion } from "framer-motion";

export default function MobileNavBtn({ title, delay }) {
  return (
    <motion.li
      key={title}
      initial={{ x: -10, opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.1, delay: delay, ease: "linear" }}
      className="mb-5 text-muted md:m-0 hover:text-black duration-300 w-fit capitalize md:hover:scale-110"
    >
      <a href={`#${title}`}>{title}</a>
    </motion.li>
  );
}
