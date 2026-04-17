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
          loading="lazy"
          className="w-full h-48 object-cover"
          src={props.image.url}
          alt={props.image.alt}
        />
      </div>

      <div id="bottom" className="p-6 gap-1.5 flex flex-col">
        <h4 className="font-semibold">{props.title}</h4>

        <p className="muted-text mb-5 min-h-[120px] md:min-h-[100px]">
          {props.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4 min-h-[50px] md:min-h-[60px]">
          {props.tools.map((tool) => (
            <span
              className="inline-flex  items-center justify-center bg-[#f2edee] capitalize rounded-md px-2 py-0.5 text-xs font-medium w-fit h-fit whitespace-nowrap  overflow-hidden border-transparent"
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
