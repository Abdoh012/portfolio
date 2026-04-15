import { useContext, useState } from "react";
import { subscription } from "../../data/subscriptions";
import PricingCard from "./PricingCard";
import { PricingContext } from "../context/PricingContext";

export default function PricingContainer() {
  const { activeCard, handleSetActiveCard } = useContext(PricingContext);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {subscription.map((card) => (
        <PricingCard
          key={card.title}
          {...card}
          activeCard={activeCard}
          setActiveCard={handleSetActiveCard}
        />
      ))}
    </div>
  );
}
