import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { info } from "../../data/info";

export default function CardsContainer() {
  const card = info.map((card) => (
    <div
      key={card.id}
      className="flex flex-col gap-6 p-6 border border-[#0000001a] justify-between rounded-xl hover:translate-x-2 duration-300"
    >
      <div className="flex gap-1 items-center">
        <FontAwesomeIcon className={card.icoStyle} icon={card.icon} />
        <h4>{card.title}</h4>
      </div>

      <p className="muted-text">{card.value}</p>
    </div>
  ));

  return card;
}
