import { createContext, useState } from "react";

export const PricingContext = createContext({
  isOpen: null,
  handleShowModal: null,
  activeCard: null,
  handleSetActiveCard: null,
});

export function PricingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  function handleSetActiveCard(card) {
    setActiveCard(card);
  }

  function handleShowModal() {
    setIsOpen((prev) => !prev);
  }

  const value = {
    isOpen,
    handleShowModal,
    activeCard,
    handleSetActiveCard,
  };

  return <PricingContext value={value}>{children}</PricingContext>;
}
