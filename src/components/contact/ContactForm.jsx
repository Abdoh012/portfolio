import MainBtn from "../buttons/MainBtn";
import InputsContainer from "./InputsContainer";

export default function ContactForm() {
  return (
    <form
      className=" flex flex-col gap-6 rounded-xl border border-[#0000001a] p-6"
      action=""
    >
      <h4 className="font-semibold">Send a Message</h4>

      <InputsContainer />

      <button className="bg-black text-white center capitalize py-2 rounded-lg cursor-pointer duration-300 md:h-auto hover:opacity-90 hover:scale-105">
        Send Message
      </button>
    </form>
  );
}
