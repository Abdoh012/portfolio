export default function DesktopNavBtn({ title }) {
  return (
    <li className="mb-0 cursor-pointer text-muted hover:text-black duration-300 w-fit capitalize hover:scale-110">
      <a href={`#${title}`}>{title}</a>
    </li>
  );
}
