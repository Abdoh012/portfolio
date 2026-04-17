import { useContext } from "react";
import { PricingContext } from "../context/PricingContext";

export default function PricingButton(props) {
  const styling = `${props.isActive ? props.card.buttonStyle + "border-0 text-white" : "border border-[#0000001a]"} w-full inline-block bg-gradient-to-r  outline-none rounded-md text-sm font-medium w-full py-2 cursor-pointer  hover:bg-[#e9ebef] hover:scale-105 duration-300`;

  const { handleShowModal } = useContext(PricingContext);

  if (props.isCustom) {
    return (
      <a
        href="https://wa.me/201275905122"
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
