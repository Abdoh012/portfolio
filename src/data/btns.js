const whiteBtn = "bg-white text-black primary-border hover:bg-[#e9ebef]";
const blackBtnBtn = "bg-black text-white";

export const heroBtns = [
  {
    title: "get in touch",
    classes: blackBtnBtn,
    icon: "fa-regular fa-envelope",
    link: "#contact",
  },
  {
    title: "view my work",
    classes: whiteBtn,
    link: "#projects",
  },
];

export const projectBtns = [
  {
    title: "code",
    classes: blackBtnBtn,
    icon: "fa-brands fa-github-alt",
    type: "code",
  },
  {
    title: "live demo",
    classes: whiteBtn,
    icon: "fa-solid fa-arrow-up-right-from-square",
    type: "live",
  },
];
