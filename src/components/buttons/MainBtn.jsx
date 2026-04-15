export default function MainBtn({ children, link, classes }) {
  const isInternal = link?.startsWith("#");

  return (
    <a
      href={link}
      target={isInternal ? "_self" : "_blank"}
      rel={isInternal ? "" : "noopener noreferrer"}
      className={`${classes} center capitalize py-2 rounded-lg cursor-pointer duration-300 md:h-auto hover:opacity-90`}
    >
      {children}
    </a>
  );
}
