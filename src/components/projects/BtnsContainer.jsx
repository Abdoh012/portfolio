import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainBtn from "../buttons/MainBtn";
import { projectBtns } from "../../data/project-btns";

export default function BtnsContainer(links) {
  const sharedCTAStyle = "hover:scale-110 font-medium text-sm px-3 gap-2 w-fit";

  return (
    <div className="flex gap-2">
      {projectBtns.map((btn) => (
        <MainBtn
          key={btn.title}
          classes={`${btn.classes} ${sharedCTAStyle}`}
          link={links[btn.type]}
        >
          <FontAwesomeIcon icon={btn.icon} />
          <span>{btn.title}</span>
        </MainBtn>
      ))}
    </div>
  );
}
