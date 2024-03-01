import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import gptclone from "@/public/gpt-clone.png";
import passwordgen from "@/public/password-gen.png";
import flipcoin from "@/public/flip-coin.png";
import quizgame from "@/public/quiz-game.png";
import portfolioweb from "@/public/portfolio-web.png";

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
      "Developed a Sentiment Analysis App in Python with GPT-3.5 API integration, enhancing and automating HR processes and data management.\n",
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
    title: "Portfolio Website",
    description:
      "Developed and designed a responsive and user-centric portfolio website, prioritizing UI/UX design with effective state management. Deployed seamlessly on Vercel with Git integration.",
    tags: ["next.js", "typescript", "react", "tailwind css", "node.js"],
    imageUrl: portfolioweb,
    repoUrl: "https://github.com/akileshjayakumar/akileshjayakumar-vercel-app",
    liveUrl: "https://akileshjayakumar.vercel.app/",
  },
  {
    title: "ChatGPT Clone",
    description:
      "Developed a ChatGPT clone showcasing backend proficiency by enabling real-time interactions with the chat bot via GPT-3.5 API calls. Deployed seamlessly on Render with Git integration.",
    tags: ["hmtl", "css", "javascript", "node.js", "express.js", "openai api"],
    imageUrl: gptclone,
    repoUrl: "https://github.com/akileshjayakumar/akileshgpt-chatgpt-clone",
    liveUrl: "https://akileshgpt-chatgpt-clone.onrender.com/",
  },
  {
    title: "Flip The Coin Game",
    description:
      "Developed an engaging coin flip game, enhancing user interaction through clickable elements and simulating coin flip animations. Deployed on GitHub Pages.",
    tags: ["hmtl", "css", "javascript"],
    imageUrl: flipcoin,
    repoUrl: "https://github.com/akileshjayakumar/flip-the-coin",
    liveUrl: "https://akileshjayakumar.github.io/flip-the-coin/",
  },
  {
    title: "General Quiz Game",
    description:
      "Developed an interactive quiz game project showcasing proficiency in frontend development, featuring customizable setup, responsive design, real-time progress tracking and immediate feedback.",
    tags: ["hmtl", "css", "javascript"],
    imageUrl: quizgame,
    repoUrl: "https://github.com/akileshjayakumar/qr-code-generator",
    liveUrl: "https://akileshjayakumar.github.io/qr-code-generator/",
  },
  {
    title: "Password Generator",
    description:
      "Developed a password generator tool, focusing on user experience to deliver multiple, unique and secure passwords. Deployed on GitHub Pages.",
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
  "Vercel",
  "Figma",
  "Microsoft Power Automate/Power BI",
  "MongoDB",
  "OpenAI API",
] as const;
