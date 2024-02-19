import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    company: "CPF Board",
    title: "Automation Intern",
    location: "Singapore",
    description: [
      "Developed a Sentiment Analysis App with GPT-3.5 API integration, enhancing and automating HR processes and data management in Python.\n",
      "Implemented Pair and prompt engineering techniques to execute test cases and plans elevating software reliability.\n",
      "Automated workflows in CPF AppFolio using Microsoft Power Automate directly improving performance.\n",
      "Research in tools and products used across the Whole of Government, including Government on Commercial Cloud (GCC), SG Tech Stack (SGTS), Pair and LaunchPad.\n",
    ],
    icon: cpflogo.src,
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
    repoUrl: "https://github.com/akileshjayakumar/akileshgpt-chatgpt-clone",
    liveUrl: "https://akileshgpt-chatgpt-clone.onrender.com/",
  },
  {
    title: "Flip A Coin Game",
    description:
      "Created an engaging coin flip game, enhancing user interaction through clickable elements and simulating coin flip animations. Successfully deployed on GitHub Pages with Git integration for continuous updates.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: flipcoin,
    repoUrl: "https://github.com/akileshjayakumar/flip-a-coin-game",
    liveUrl: "https://akileshjayakumar.github.io/flip-a-coin-game/",
  },
  {
    title: "Password Generator",
    description:
      "Implemented a robust password generator tool, focusing on user experience to deliver unique and secure passwords. Successfully deployed on GitHub Pages with Git integration for continuous updates.",
    tags: ["HTML", "CSS", "JavaScript"],
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
  "MongoDB",
  "OpenAI",
  "Git",
  "GitHub",
  "Azure/AWS/GCP",
] as const;
