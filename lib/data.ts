import { CgWorkAlt } from "react-icons/cg";
import gptclone from "@/public/gpt-clone.png";
import passwordgen from "@/public/password-gen.png";
import textspeech from "@/public/text-to-speech.png";
import flipcoin from "@/public/flip-coin.png";

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
    name: "EDUCATION",
    hash: "#education",
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
      "Developed a Sentiment Analysis App using GPT-3.5 API and Python to automate HR processes.",
      "Utilised pair.gov.sg platform and prompt engineering techniques to automate test cases, reducing software bugs.",
      "Automated repetitive workflows using Microsoft Power Automate, streamlining operations for employees.",
      "Research on Whole of Government (WOG) tools and products, gaining insights into digital infrastructure.",
    ],
    icon: CgWorkAlt,
    date: "December 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Password Generator",
    description:
      "Implemented a robust password generator tool, focusing on user experience to deliver unique and secure passwords. Deployed on GitHub Pages with Git integration for continuous updates.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: passwordgen,
    repoUrl: "https://github.com/akileshjayakumar/password-generator",
    liveUrl: "https://akileshjayakumar.github.io/password-generator/",
  },
  {
    title: "Text To Speech",
    description:
      "Developed a Text to Speech web application demonstrating frontend proficiency, enabling real-time text-to-speech conversion using Web Speech API. Deployed on GitHub Pages with Git integration for continuous updates.",
    tags: ["html", "css", "javascript"],
    imageUrl: textspeech,
    repoUrl: "https://github.com/akileshjayakumar/text-to-speech",
    liveUrl: "https://akileshjayakumar.github.io/text-to-speech/",
  },
  {
    title: "Flip The Coin Game",
    description:
      "Created an engaging coin flip game, enhancing user interaction through clickable elements and simulating coin flip animations. Deployed on GitHub Pages with Git integration for continuous updates.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: flipcoin,
    repoUrl: "https://github.com/akileshjayakumar/flip-the-coin",
    liveUrl: "https://akileshjayakumar.github.io/flip-the-coin/",
  },
] as const;

export const skillsData = {
  languages: ["Python", "SQL", "JavaScript/TypeScript", "HTML/CSS"],
  frameworks: ["Tailwind CSS", "React", "Next.js", "Node.js", "Express.js"],
  devTools: [
    "Git",
    "GitHub",
    "Vercel",
    "Render",
    "Figma",
    "OpenAI",
    "Hugging Face",
  ],
  databases: ["MongoDB", "Oracle"],
} as const;
