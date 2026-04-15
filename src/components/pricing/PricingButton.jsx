import { use } from "react";
import { PricingContext } from "../context/PricingContext";

export default function PricingButton(props) {
  const styling = `${props.isActive ? props.card.buttonStyle + "border-0 text-white" : "border border-[#0000001a]"} w-full inline-block hover:bg-primary/90 hover:bg-primary/90 bg-gradient-to-r  outline-none rounded-md text-sm font-medium w-full py-2 cursor-pointer  hover:bg-[#e9ebef] hover:scale-105 duration-300`;

  const { handleShowModal } = use(PricingContext);

  if (props.isCustom) {
    return (
      <a
        href="https://wa.me/201234567890?text=Hi%20I%20just%20submitted%20a%20project%20request"
        target="_blank"
        rel="noopener noreferrer"
        className={styling}
      >
        {props.card.button}
      </a>
    );
  }

  return (
    <button className={styling} onClick={handleShowModal}>
      {props.card.button}
    </button>
  );
}
