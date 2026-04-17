import { subscription } from "../../data/subscriptions";
import PricingCard from "./PricingCard";

export default function PricingContainer() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {subscription.map((card) => (
        <PricingCard key={card.title} {...card} />
      ))}
    </div>
  );
}
