import { inputs } from "../../data/inputs";
import { motion } from "framer-motion";
import Input from "../Input";

export default function InputsContainer() {
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

  const inputsCards = inputs.map((input) => {
    return (
      <motion.div key={input.id} variants={itemVariants}>
        <Input type={input.type} placeholder={input.placeholder} />
      </motion.div>
    );
  });

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col gap-4"
    >
      {inputsCards}
    </motion.div>
  );
}
