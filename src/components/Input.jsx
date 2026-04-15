export default function Input({ type, placeholder, id, value }) {
  return (
    <div>
      <input
        value={value || ""}
        disabled={value ? true : false}
        id={id || ""}
        type={type}
        placeholder={placeholder}
        className="placeholder:muted-text text-base font-semibold focus:outline-none focus:ring-2 focus:ring-[#a1a1a1] bg-[#f3f3f5] rounded-md duration-300 border-0 border-input flex h-9 w-full min-w-0 px-3 py-1 outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm"
      />
    </div>
  );
}
