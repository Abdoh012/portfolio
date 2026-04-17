export default function ModalBtn({ classes, title, handleClick, disabled }) {
  return (
    <button
      className={`${classes} w-1/2 py-2 duration-300 rounded-lg cursor-pointer `}
      onClick={handleClick && handleClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
