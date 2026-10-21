import { motion } from "framer-motion";
import MainBtn from "../buttons/MainBtn";
import { navBtns } from "../../data/nav-btns";
import NavBtn from "./NavBtn";
import { whatsapp } from "@/data/whatsapp";


const MotionNavBtn = motion(NavBtn);

export default function MobileNavBar() {
  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.1 },
      scaleY: 1,
      opacity: 1,
      originY: 0,
    },
    hidden: { scaleY: 0, opacity: 0 },
  };

  const itemsVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  };

  return (
    <>
      <motion.ul
        variants={containerVariants}
        initial={"hidden"}
        animate={"visible"}
        exit={"hidden"}
        transition={{ type: "spring" }}
        className="absolute p-5 overflow-hidden md:hidden top-full left-0 w-full backdrop-blur-md muted-text shadow"
      >
        {navBtns.map((btn) => (
          <MotionNavBtn variants={itemsVariants} key={btn.title} {...btn} />
        ))}

        <MainBtn link={whatsapp} classes="w-full bg-black text-white md:w-auto">
          hire me
        </MainBtn>
      </motion.ul>
    </>
  );
}
