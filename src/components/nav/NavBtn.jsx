export default function NavBtn({ title, link }) {
  return (
    <li className="text-gray-600 hover:text-black hover:scale-110 capitalize w-fit duration-300 cursor-pointer mb-3 md:mb-0">
      <a href={`#${link}`}>{title}</a>
    </li>
  );
}
