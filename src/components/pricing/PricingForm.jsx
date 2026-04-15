import { pricingInputs } from "../../data/pricing-inputs";
import PricingInput from "./PricingInput";

export default function PricingForm(params) {
  return (
    <form action="">
      {pricingInputs.map((input) => (
        <PricingInput key={input.id} {...input} />
      ))}
    </form>
  );
}
