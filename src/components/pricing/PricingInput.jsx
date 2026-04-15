import { useContext } from "react";
import Input from "../Input";
import { PricingContext } from "../context/PricingContext";

export default function PricingInput(input) {
  const { activeCard } = useContext(PricingContext);
  return (
    <div className="mb-5">
      <label
        htmlFor={input.id}
        className="flex items-center gap-2 text-sm leading-none font-medium mb-1.5"
      >
        {input.label} <span>*</span>
      </label>

      {input.label === "Project Details" ? (
        <textarea
          id={input.id}
          placeholder={input.placeholder}
          className="placeholder:muted-text resize-none font-semibold focus:outline-none focus:ring-2 focus:ring-[#a1a1a1] bg-[#f3f3f5] rounded-md duration-300 border-0 border-input flex h-20 w-full min-w-0 px-3 py-1 outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm"
        />
      ) : (
        <Input
          value={input.label === "Selected Plan" ? activeCard : ""}
          type={input.type}
          id={input.id}
          placeholder={input.placeholder}
        />
      )}
    </div>
  );
}
