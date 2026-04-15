import Header from "./Header";

export default function Section(props) {
  return (
    <section
      id={props.id}
      className={`${props.classes} py-20 px-4 center overflow-hidden`}
    >
      <div className={`container ${props.containerWd}`}>
        <Header title={props.headerTitle} />
        {props.children}
      </div>
    </section>
  );
}
