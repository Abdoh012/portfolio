import MainBtn from "../buttons/MainBtn";
import DesktopNavBtn from "./DesktopNavBtn";
import { navBtns } from "../../data/navBtns";

export default function DesktopNavBar() {
  return (
    <ul className="hidden md:flex md:justify-between md:items-center md:w-120 md:h-20 md:px-5">
      {navBtns.map((btn) => (
        <DesktopNavBtn key={btn.title} title={btn.title} link={btn.link} />
      ))}

      <MainBtn
        link="https://wa.me/01275905122?text=Hello%20I%20want%20to%20hire%20you"
        classes="bg-black text-white px-5 hover:scale-110"
      >
        hire me
      </MainBtn>
    </ul>
  );
}
