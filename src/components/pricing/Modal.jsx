import { useContext, useEffect } from "react";
import { PricingContext } from "../context/PricingContext";
import { motion } from "framer-motion";
import PricingForm from "./PricingForm";

const backdropAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalAnimation = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
  transition: { duration: 0.2 },
};

export default function Modal() {
  const { isOpen, handleShowModal, activeCard } = useContext(PricingContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.div
      {...backdropAnimation}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 scroll-m-0"
    >
      <motion.div {...modalAnimation} className="rounded-xl p-6 bg-white">
        <div
          onClick={handleShowModal}
          className="flex justify-end text-lg cursor-pointer"
        >
          x
        </div>
        <div className="flex flex-col gap-2 text-center sm:text-left mb-4">
          <h2 className="font-semibold text-2xl">
            Get Started with {activeCard}
          </h2>

          <p className="muted-text text-sm">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <PricingForm />
      </motion.div>
    </motion.div>
  );
}
