export const projects = [
  {
    id: 1,
    title: "El-Le3ba (اللعبة)",
    description:
      "A competitive university quiz application for BATU students. Teams compete in real-time ranked trivia matches with live leaderboards, event-based competition cycles, and a full admin dashboard.",
    tools: ["next.js", "react", "typescript", "tailwind", "motion", "socket.io", "express", "mongodb"],
    image: {
      url: "/project-bg.png",
      alt: "El-Le3ba",
    },
    live: "https://el-le3ba.vercel.app/",
    code: "https://github.com/AbdulrahmanSE2003/el-le3ba",
  },
  {
    id: 2,
    title: "Medical System",
    description:
      "A full-stack orthopedic supplies platform for healthcare professionals. Browse surgical instruments, implants and consumables with category filtering and pagination, manage a cart with optimistic updates, and sign in with JWT-based role-based access.",
    tools: ["next.js", "react", "tailwind", "motion", "shadcn", "express", "mongodb", "jwt"],
    image: {
      url: "/medical-system-bg.png",
      alt: "Medical System",
      fit: "cover",
    },
    live: "https://medical-system-frontend-eight.vercel.app",
    code: "https://github.com/Abdoh012/Medical-systems",
  },
  {
    id: 3,
    title: "Masar",
    description:
      "A platform connecting students and fresh graduates with real companies for training, hands-on experience, and a documented path toward their first job.",
    tools: ["next.js", "react", "typescript", "tailwind", "shadcn", "php", "mysql", "jwt"],
    image: {
      url: "/masar-bg.png",
      alt: "Masar",
      fit: "cover",
    },
    live: "https://masar.vercel.app",
    code: "https://github.com/Abdoh012/Masar",
  },
];
