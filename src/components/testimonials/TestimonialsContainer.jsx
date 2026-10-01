import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsContainer() {
  return (
    <ul className="flex flex-col gap-6 md:grid md:grid-cols-2">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id || testimonial.name}
          {...testimonial}
          delay={index * 0.1}
        />
      ))}
    </ul>
  );
}