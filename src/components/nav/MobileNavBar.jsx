import { AnimatePresence, motion } from "framer-motion";
import MobileNavBtn from "./MobileNavBtn";
import MainBtn from "../buttons/MainBtn";
import { navBtns } from "../../data/navBtns";

export default function MobileNavBar({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.ul
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          style={{ originY: 0 }}
          className="absolute p-5 overflow-hidden top-full left-0 w-full backdrop-blur-md muted-text shadow"
        >
          {navBtns.map((btn) => (
            <MobileNavBtn key={btn.title} {...btn} />
          ))}

          <MainBtn
            link="mailto:abdohmahmoud28@email.com?subject=Hiring Inquiry"
            classes="w-full bg-black text-white md:w-auto"
          >
            hire me
          </MainBtn>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
