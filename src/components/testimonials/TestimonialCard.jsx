import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainBtn from "../buttons/MainBtn";
import MotionWrapper from "../motion/MotionWrapper";

const ARABIC = /[\u0600-\u06FF]/;

export default function TestimonialCard({
  name,
  title,
  university,
  relationship,
  testimonial,
  linkedin,
  image,
  delay,
}) {
  const initial = (name || "?").trim().charAt(0);
  const isRTL = ARABIC.test(testimonial || "");

  return (
    <MotionWrapper
      element="li"
      initial={{ y: 20 }}
      animation={{ y: 0 }}
      delay={delay}
      className="flex flex-col h-full gap-4 sm:gap-5 bg-white rounded-xl border border-[#0000001a] p-4 sm:p-6 hover:shadow-xl hover:translate-y-[-6px] duration-300"
    >
      <div className="flex flex-wrap items-start gap-3 sm:gap-4">
        {image?.url ? (
          <div className="shrink-0 w-16 h-20 overflow-hidden rounded-xl bg-[#f5f5ff] border border-[#0000001a]">
            <img
              loading="lazy"
              src={image.url}
              alt={image.alt || name}
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="center shrink-0 w-16 h-20 rounded-xl bg-secondary-color border border-[#0000001a] font-semibold"
          >
            {initial}
          </div>
        )}

        <div className="min-w-0 flex-1 basis-[8rem]">
          {name && (
            <h4 className="font-semibold leading-tight break-words">
              {name}
            </h4>
          )}

          {title && (
            <p className="muted-text text-sm mt-1 break-words">{title}</p>
          )}

          {university && (
            <p className="muted-text text-xs mt-1 break-words">
              {university}
            </p>
          )}
        </div>

        {linkedin ? (
          <MainBtn
            link={linkedin}
            classes="group shrink-0 ml-auto gap-2 text-xs px-3 border border-[#0000001a] rounded-full hover:bg-black hover:text-white"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-linkedin-in"
              className="text-blue-600 group-hover:text-white"
            />
            <span>LinkedIn</span>
          </MainBtn>
        ) : (
          <span
            aria-hidden="true"
            className="center shrink-0 ml-auto gap-2 text-xs px-3 py-2 text-[#00000059] border border-dashed border-[#00000026] rounded-full select-none"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
            <span>No profile</span>
          </span>
        )}
      </div>

      {testimonial && (
        <blockquote
          dir={isRTL ? "rtl" : "ltr"}
          className="flex flex-col flex-1 gap-3 min-w-0"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-quote-left"
            className={`text-xl text-blue-600/70 shrink-0 ${
              isRTL ? "self-end" : ""
            }`}
          />

          <p className="leading-relaxed muted-text break-words">
            {testimonial}
          </p>
        </blockquote>
      )}

      {relationship && (
        <p className="mt-auto flex items-start gap-2 pt-4 border-t border-[#0000001a] text-xs muted-text break-words">
          <FontAwesomeIcon
            icon="fa-solid fa-handshake"
            className="mt-0.5 shrink-0"
          />
          <span>{relationship}</span>
        </p>
      )}
    </MotionWrapper>
  );
}