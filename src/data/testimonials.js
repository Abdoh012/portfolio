/* Add a new testimonial by appending one more object to this array.
   Every field is optional except `name` and `testimonial`,
   the card simply skips whatever isn't provided. */
export const testimonials = [
  {
    id: 1,
    name: "Abdelrahman Saad",
    title: "MERN Stack Developer",
    university: "جامعة برج العرب التكنولوجية",
    relationship: "Worked together on medical systems and the game.",
    testimonial:
      "Collaborating with Abdulrahman was a fantastic experience. He brings UI to life with brilliant animations and creates brilliant user experiences. Beyond his technical skills, he’s extremely reliable and follows best practices to the letter on every task.",
    linkedin: "https://www.linkedin.com/in/abdulrahman-saad-hassan/",
    image: {
      url: "/testimonial/abdoh%20saad.png",
      alt: "Abdelrahman Saad",
    },
  },
  {
    id: 2,
    name: "Abdelrahman Ramzy",
    title:
      "Network student learning Cyber Security and working on hardware projects as a hobby",
    university: "جامعة برج العرب التكنولوجية",
    relationship:
      "Worked together on Masar, the game, and the Greenhouse hardware project where I worked on the software side.",
    testimonial:
      "I had the pleasure of working with Abdulrahman on several hardware and software projects, most notably the Manus event and our IoT Smart Greenhouse. He is a highly dedicated and thoughtful professional. His ability to collaborate seamlessly and consistently deliver high-quality results makes him an outstanding team player. I highly recommend him as a strong asset to any organization.",
    linkedin: "https://www.linkedin.com/in/abdulrahmanhelal",
    image: {
      url: "/testimonial/abdoh%20ramzy.png",
      alt: "Abdelrahman Ramzy",
    },
  },
];