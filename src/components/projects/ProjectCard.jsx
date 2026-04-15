import BtnsContainer from "./BtnsContainer";
import MotionWrapper from "../motion/MotionWrapper";

export default function ProjectCard({ live, code, ...props }) {
  const links = { live, code };

  return (
    <MotionWrapper
      element="div"
      initial={{ y: 20 }}
      animation={{ y: 0 }}
      delay={props.delay}
      className="flex flex-col gap-6 rounded-xl border overflow-hidden hover:shadow-2xl border-[#0000001a] duration-300 h-full hover:translate-y-[-10px]"
    >
      <div id="top" className="overflow-hidden hover:scale-105 duration-300">
        <img
          className="w-full h-48 object-cover"
          src={props.image}
          alt="Not found"
        />
      </div>

      <div id="bottom" className="p-6 gap-1.5 flex flex-col">
        <h4>{props.title}</h4>

        <p className="muted-text mb-5 min-h-[70px]">{props.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {props.tools.map((tool) => (
            <span
              className="inline-flex items-center justify-center bg-[#f2edee] capitalize rounded-md px-2 py-0.5 text-xs font-medium w-fit h-fit whitespace-nowrap  overflow-hidden border-transparent"
              key={tool}
            >
              {tool}
            </span>
          ))}
        </div>

        <BtnsContainer {...links} />
      </div>
    </MotionWrapper>
  );
}
