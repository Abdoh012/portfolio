import { AnimatePresence, motion } from "framer-motion";
import MainBtn from "../buttons/MainBtn";
import { navBtns } from "../../data/nav-btns";
import NavBtn from "./NavBtn";
import { whatsapp } from "@/data/whatsapp";

const menuAnimation = {
  initial: { scaleY: 0, opacity: 0 },
  animate: { scaleY: 1, opacity: 1 },
  exit: { scaleY: 0, opacity: 0 },
  style: { originY: 0 },
};

export default function MobileNavBar({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.ul
          {...menuAnimation}
          className="absolute p-5 overflow-hidden md:hidden top-full left-0 w-full backdrop-blur-md muted-text shadow"
        >
          {navBtns.map((btn) => (
            <NavBtn key={btn.title} {...btn} />
          ))}

          <MainBtn
            link={whatsapp}
            classes="w-full bg-black text-white md:w-auto"
          >
            hire me
          </MainBtn>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
