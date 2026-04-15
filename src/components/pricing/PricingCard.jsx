import Price from "./Price";
import PopularBadge from "./PopularBadge ";
import PlanBenefits from "./PlanBenefits";
import MotionWrapper from "../motion/MotionWrapper";
import PricingButton from "./PricingButton";
import { useState } from "react";
import Modal from "./Modal";

export default function PricingCard({ setActiveCard, ...card }) {
  const isActive = card.title === card.activeCard;
  const isPro = card.title === "Professional";
  const isCustom = card.price === "Custom";

  return (
    <MotionWrapper
      element="div"
      initial={{ y: 35 }}
      animation={{ y: 0 }}
      delay={card.delay}
      className={`${isActive ? card.border : "border-[#0000001a]"} relative flex flex-col p-6 bg-white rounded-xl border-2  hover:translate-y-[-10px]  hover:shadow-2xl duration-300`}
      handleClick={() => setActiveCard(card.title)}
    >
      {isPro && <PopularBadge />}

      <div
        className={`${card.titleColor} inline-block bg-clip-text text-transparent mb-2 font-semibold`}
      >
        <h2 className="text-2xl">{card.title}</h2>
      </div>

      <Price price={card.price} isCustom={isCustom} />

      <div className="muted-text">{card.description}</div>

      <div className="flex flex-col flex-1">
        <PlanBenefits benefits={card.benefits} />

        <div className="text-center">
          <PricingButton card={card} isActive={isActive} isCustom={isCustom} />
        </div>
      </div>
    </MotionWrapper>
  );
}
