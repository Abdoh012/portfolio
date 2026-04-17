import { useContext } from "react";
import { pricingInputs } from "../../data/pricing-inputs";
import { PricingContext } from "../context/PricingContext";
import ModalBtn from "./ModalBtn";
import PricingInput from "./PricingInput";

export default function PricingForm() {
  const { handleShowModal, handleSendReq, isSubmitting } =
    useContext(PricingContext);

  return (
    <form onSubmit={handleSendReq}>
      {pricingInputs.map((input) => (
        <PricingInput key={input.id} {...input} />
      ))}

      <div className="flex  gap-3">
        <ModalBtn
          classes="bg-white text-black primary-border hover:bg-[#e9ebef]"
          handleClick={handleShowModal}
          title="Cancel"
        />

        <ModalBtn
          classes="from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 hover:bg-primary/90 hover:bg-primary/90 bg-gradient-to-r text-white"
          title={isSubmitting ? "Sending..." : "Submit Request"}
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
}
