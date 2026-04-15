import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Link({ icon, iconStyle, link }) {
  const isExternalLink = link.startsWith("http") || link.startsWith("mailto");
  return (
    <li
      className={`${iconStyle || ""}  hover:rotate-9 hover:scale-120 cursor-pointer duration-300`}
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
