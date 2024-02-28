import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import gptclone from "@/public/gpt-clone.png";
import qrcode from "@/public/qr-code.png";
import passwordgen from "@/public/password-gen.png";

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
    company: "CPF Board",
    title: "Automation Intern",
    location: "Singapore",
    description: [
      "Developed a Sentiment Analysis App with GPT-3.5 API integration, enhancing and automating HR processes and data management in Python.\n",
      "Utilized Pair and prompt engineering techniques to execute test cases and plans elevating software reliability.\n",
      "Automated workflows in CPF AppFolio using Microsoft Power Automate directly improving performance.\n",
      "Research in tools and products used across the Whole of Government, including Government on Commercial Cloud (GCC), SG Tech Stack (SGTS), Pair and LaunchPad.\n",
    ],
    icon: CgWorkAlt,
    date: "Dec 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "ChatGPT Clone Project",
    description:
      "Engineered a ChatGPT clone showcasing backend proficiency by enabling real-time interactions with the chat bot via GPT-3.5 API calls. Deployed seamlessly on Render with Git integration for continuous updates.",
    tags: ["hmtl", "css", "javascript", "node.js", "express.js", "openai api"],
    imageUrl: gptclone,
    repoUrl: "https://github.com/akileshjayakumar/akileshgpt-chatgpt-clone",
    liveUrl: "https://akileshgpt-chatgpt-clone.onrender.com/",
  },
  {
    title: "QR Code Generator",
    description:
      "Developed a user-friendly QR Code Generator utilizing HTML, CSS, and JavaScript for efficient generation and customization of QR codes. Deployed on GitHub Pages.",
    tags: ["hmtl", "css", "javascript"],
    imageUrl: qrcode,
    repoUrl: "https://github.com/akileshjayakumar/qr-code-generator",
    liveUrl: "https://akileshjayakumar.github.io/qr-code-generator/",
  },
  {
    title: "Password Generator",
    description:
      "Implemented a password generator tool, focusing on user experience to deliver multiple, unique and secure passwords. Deployed on GitHub Pages.",
    tags: ["hmtl", "css", "javascript"],
    imageUrl: passwordgen,
    repoUrl: "https://github.com/akileshjayakumar/password-generator",
    liveUrl: "https://akileshjayakumar.github.io/password-generator/",
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
  "Git",
  "GitHub",
  "OpenAI",
  "MongoDB",
  "Vercel",
] as const;
