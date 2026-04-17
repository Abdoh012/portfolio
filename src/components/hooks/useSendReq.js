import sendEmail from "@/data/http";
import { showError, showSuccess } from "@/data/notifications";
import { useState } from "react";

export default function useSendReq() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  async function sendReq(e, templateId) {
    e.preventDefault();
    setIsSubmitting(true);
    setIsOpen(true);

    try {
      const res = await sendEmail(e.target, templateId);
      showSuccess("Your request has been sent successfully!");
      setIsOpen(false);
      e.target.reset();
    } catch (error) {
      showError(error.text || "Failed to send email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return { sendReq, isSubmitting, isOpen, setIsOpen };
}
