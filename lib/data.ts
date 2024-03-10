import { CgWorkAlt } from "react-icons/cg";
import gptclone from "@/public/gpt-clone.png";
import passwordgen from "@/public/password-gen.png";
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
      "Developed a Sentiment Analysis App in Python with GPT-3.5 API integration, enhancing and automating HR processes.",
      "Utilized Pair and prompt engineering techniques to execute test cases and plans elevating software reliability.",
      "Automated workflows and integrated them into CPF AppFolio using Microsoft Power Automate.",
      "Research in tools and products used across the Whole of Government, including GCC, SGTS, Pair and LaunchPad.",
    ],
    icon: CgWorkAlt,
    date: "Dec 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "ChatGPT Clone",
    description:
      "Developed a ChatGPT clone showcasing backend proficiency by enabling real-time interactions with the chat bot via GPT-3.5 API calls. Deployed on Render.",
    tags: ["html", "css", "javascript", "node.js", "express.js", "openai api"],
    imageUrl: gptclone,
    repoUrl: "https://github.com/akileshjayakumar/akileshgpt-chatgpt-clone",
    liveUrl: "https://akileshgpt-chatgpt-clone.onrender.com/",
  },
  {
    title: "Flip The Coin Game",
    description:
      "Developed an engaging coin flip game, enhancing user interaction through clickable elements and simulating coin flip animations. Deployed on GitHub Pages.",
    tags: ["html", "css", "javascript"],
    imageUrl: flipcoin,
    repoUrl: "https://github.com/akileshjayakumar/flip-the-coin",
    liveUrl: "https://akileshjayakumar.github.io/flip-the-coin/",
  },
  {
    title: "Password Generator",
    description:
      "Developed a password generator tool, focusing on user experience to deliver multiple, unique and secure passwords. Deployed on GitHub Pages.",
    tags: ["html", "css", "javascript"],
    imageUrl: passwordgen,
    repoUrl: "https://github.com/akileshjayakumar/password-generator",
    liveUrl: "https://akileshjayakumar.github.io/password-generator/",
  },
] as const;

export const skillsData = {
  languages: ["Python", "SQL", "JavaScript/TypeScript", "HTML/CSS"],
  frameworks: ["Tailwind CSS", "React", "Next.js", "Node.js", "Express.js"],
  devTools: ["Git", "GitHub", "Vercel", "Render", "Figma"],
  databases: ["MongoDB", "Oracle"],
  api: ["OpenAI", "Hugging Face"],
} as const;
