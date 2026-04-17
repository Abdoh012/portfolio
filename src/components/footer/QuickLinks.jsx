import { navBtns } from "@/data/nav-btns";

export default function QuickLinks() {
  return (
    <ul>
      {navBtns.map((link) => (
        <li key={link.link} className="">
          <a
            href={link.link}
            className="inline-block origin-center hover:scale-110 transition hover:text-white mb-2 text-gray-400 capitalize cursor-pointer duration-300"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
