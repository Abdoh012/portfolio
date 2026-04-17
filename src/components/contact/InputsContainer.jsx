import { inputs } from "../../data/contact-inputs";
import { motion } from "framer-motion";
import Input from "../Input";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function InputsContainer() {
  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col gap-4"
    >
      {inputs.map((input) => (
        <motion.div key={input.id} variants={itemVariants}>
          <Input
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
