import { use } from "react";
import Content from "../components/Content";
import PricingContainer from "../components/pricing/PricingContainer";
import PricingFooter from "../components/pricing/PricingFooter";
import Section from "../components/Section";
import Modal from "../components/pricing/Modal";
import { AnimatePresence } from "framer-motion";
import { PricingContext } from "../components/context/PricingContext";

export default function Pricing() {
  const description =
    "Choose the perfect plan for your project. All plans include ongoing support and maintenance for 30 days after delivery. Additional maintenance and updates are available at an hourly rate.";

  const { isOpen } = use(PricingContext);
  return (
    <Section
      headerTitle="Payment Plans"
      id="pricing"
      classes="bg-secondary-color"
      containerWd="max-w-7xl"
    >
      <Content description={description}>
        <AnimatePresence>{isOpen && <Modal />}</AnimatePresence>

        <PricingContainer />

        <PricingFooter />
      </Content>
    </Section>
  );
}
