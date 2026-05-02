import { useContext, useState } from "react";
import { NavContext } from "../context/NavCtx";

export default function NavBtn({ title, link }) {
  const { activePage, setActivePage } = useContext(NavContext);
  return (
    <li
      className={`${activePage === link && "!text-black scale-110"} text-gray-600 hover:text-black hover:scale-110 capitalize w-fit duration-300 cursor-pointer mb-3 md:mb-0`}
    >
      <a href={`#${link}`} onClick={() => setActivePage(link)}>
        {title}
      </a>
    </li>
  );
}
