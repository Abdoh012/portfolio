import { navBtns } from "@/data/nav-btns";
import MainBtn from "../buttons/MainBtn";
import NavBtn from "./NavBtn";
import { whatsapp } from "@/data/whatsapp";

export default function DesktopNavBar() {
  return (
    <ul className="hidden md:flex md:justify-between md:items-center md:w-120 md:h-20 md:px-5">
      {navBtns.map((btn) => (
        <NavBtn key={btn.title} {...btn} />
      ))}

      <MainBtn
        link={whatsapp}
        classes="bg-black text-white px-5 hover:scale-110"
      >
        hire me
      </MainBtn>
    </ul>
  );
}
