import sendEmail from "@/data/http";
import { showError, showSuccess } from "@/data/notifications";
import { createContext, useState } from "react";
import useSendReq from "../hooks/useSendReq";

export const PricingContext = createContext({
  isOpen: null,
  handleShowModal: null,
  activeCard: null,
  handleSetActiveCard: null,
  handleSendReq: null,
  isSubmitting: null,
});

export function PricingProvider({ children }) {
  const [activeCard, setActiveCard] = useState(null);

  const { isSubmitting, sendReq, isOpen, setIsOpen } = useSendReq();

  function handleSetActiveCard(card) {
    setActiveCard(card);
  }

  function handleShowModal() {
    setIsOpen((prev) => !prev);
  }

  async function handleSendReq(e) {
    await sendReq(e, "template_nxsq17i");
  }

  const value = {
    isOpen,
    handleShowModal,
    activeCard,
    handleSetActiveCard,
    handleSendReq,
    isSubmitting,
  };

  return <PricingContext value={value}>{children}</PricingContext>;
}
