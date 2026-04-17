import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Link({ icon, link, iconStyle }) {
  const isExternalLink = link.startsWith("http") || link.startsWith("mailto");

  return (
    <li
      className={`hover:rotate-9 hover:scale-120 cursor-pointer duration-300 ${iconStyle || ""}`}
    >
      <a
        href={link}
        target={isExternalLink ? "_blank" : "_self"}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
}
