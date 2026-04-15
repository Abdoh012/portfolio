import { quickLinks } from "../../data/links";

export default function QuickLinks() {
  return (
    <ul>
      {quickLinks.map((link) => (
        <li key={link.name} className="mb-2">
          <a
            href={link.href}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
