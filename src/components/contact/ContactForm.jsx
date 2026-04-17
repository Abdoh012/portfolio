import useSendReq from "../hooks/useSendReq";
import InputsContainer from "./InputsContainer";

export default function ContactForm() {
  const { sendReq, isSubmitting } = useSendReq();

  return (
    <div>
      <form
        className=" flex flex-col gap-6 rounded-xl border border-[#0000001a] p-6"
        action=""
        onSubmit={async (e) => await sendReq(e, "template_k797e48")}
      >
        <h4 className="font-semibold">Send a Message</h4>

        <InputsContainer />

        <button className="bg-black text-white center capitalize py-2 rounded-lg cursor-pointer duration-300 md:h-auto hover:opacity-90 hover:scale-105">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
