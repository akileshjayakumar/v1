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
    title: "CPF Board | Automation Intern",
    location: "Singapore",
    description:
      "Developed and implemented innovative automation solutions leveraging Python, Microsoft Power Automate, and GPT-3.5 API to streamline HR tasks, enhance data management, and improve software testing efficiency while gaining proficiency in various government-specific tools and technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "ChatGPT Clone Project",
    description:
      "Engineered a ChatGPT clone showcasing backend proficiency by enabling real-time interactions with the chat bot via GPT-3.5 API calls. Deployed seamlessly on Render with Git integration for continuous updates.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "OpenAI API"],
    imageUrl: gptclone,
  },
  {
    title: "Flip A Coin Game",
    description:
      "Created an engaging coin flip game, enhancing user interaction through clickable elements and simulating coin flip animations. Successfully deployed on GitHub Pages with Git integration for continuous updates.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: flipcoin,
  },
  {
    title: "Password Generator",
    description:
      "Implemented a robust password generator tool, focusing on user experience to deliver unique and secure passwords. Successfully deployed on GitHub Pages with Git integration for continuous updates.",
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
  "Express.js",
  "MongoDB",
  "OpenAI",
  "Git",
  "GitHub",
  "Azure/AWS/GCP",
] as const;
