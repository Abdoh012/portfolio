import CardsContainer from "./CardsContainer";
import ContactForm from "./ContactForm";

export default function ContactContainer() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <CardsContainer />
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
}
