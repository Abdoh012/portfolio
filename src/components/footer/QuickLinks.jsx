import { navBtns } from "@/data/nav-btns";
import { NavContext } from "../context/NavCtx";
import { useContext } from "react";

export default function QuickLinks() {
  const { setActivePage } = useContext(NavContext);

  return (
    <ul>
      {navBtns.map((link) => (
        <li key={link.link}>
          <a
            onClick={() => setActivePage(link.link)}
            href={`#${link.link}`}
            className="inline-block origin-center hover:scale-110 transition hover:text-white mb-2 text-gray-400 capitalize cursor-pointer duration-300"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
