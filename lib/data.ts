import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gptclone from "@/public/gpt-clone.png";
import flipcoin from "@/public/flip-coin.png";
import passwordgen from "@/public/password-gen.png";
import cpflogo from "@/public/cpf-logo.png";

export const links = [
  {
    name: "HOME",
    hash: "#home",
  },
  {
    name: "ABOUT",
    hash: "#about",
  },
  {
    name: "SKILLS",
    hash: "#skills",
  },
  {
    name: "EXPERIENCE",
    hash: "#experience",
  },
  {
    name: "PROJECTS",
    hash: "#projects",
  },
] as const;

export const experiencesData = [
  {
    title: "Automation Intern | CPF Board",
    location: "Singapore",
    description:
      "Built HR automation bot using GPT-3.5 API, Power Automate, & Python. Reduced user testing time by 30% with automated test cases in Python. Improved software quality with automated tests using Pair & prompt engineering. Gained expertise in GovTech tools: SGTS, Pair, LaunchPad, & GCC.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "ChatGPT Clone Project",
    description:
      "Developed a ChatGPT clone with frontend (HTML, CSS, JavaScript) and backend (Node.js, Express) components, leveraging GPT-3.5 API for AI interactions in real-time.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "OpenAI API"],
    imageUrl: gptclone,
  },
  {
    title: "Flip A Coin Game",
    description:
      "Interactive  Coin Flip Game simulating coin tosses with clickable fun. Developed with HTML, CSS, and JavaScript for engaging gameplay.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: flipcoin,
  },
  {
    title: "Password Generator",
    description:
      "Password Generator crafting robust and unique passwords. Implemented using HTML, CSS, and JavaScript for a user-friendly experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: passwordgen,
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "JavaScript/TypeScript",
  "HTML/CSS",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Vercel",
  "MongoDB",
  "OpenAI",
  "Microsoft Power Automate/Power BI",
  "Azure/AWS/GCP",
  "Framer Motion",
] as const;
