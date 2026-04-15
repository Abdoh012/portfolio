import SectionTitle from "./SectionTitle";

export default function Content({ description, children }) {
  return (
    <>
      <SectionTitle
        initial={{ y: 40 }}
        animation={{ y: 0 }}
        classes="text-center mb-12 max-w-2xl mx-auto"
      >
        {description}
      </SectionTitle>

      {children}
    </>
  );
}
