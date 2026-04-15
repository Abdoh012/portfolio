export default function ModalBtn({ classes, title, handleClick }) {
  return (
    <button
      className={`${classes} w-1/2 py-2 duration-300 rounded-lg cursor-pointer `}
      onClick={handleClick && handleClick}
    >
      {title}
    </button>
  );
}
