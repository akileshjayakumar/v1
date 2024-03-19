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
      "Developed a Sentiment Analysis App using GPT-3.5 API and Python to automate HR processes, improving efficiency.",
      "Used Pair.Gov.SG platform and prompt engineering techniques to execute test cases, improving software.",
      "Automated repetitive workflows using Microsoft Power Automate, streamlining operations for employees.",
      "Conducted research on government tools and products, gaining insights into digital infrastructure on GCC and SGTS.",
    ],
    icon: CgWorkAlt,
    date: "December 2023 - Present",
  },
  {
    company: "CPF Board12345",
    title: "Automation Intern",
    location: "Singapore",
    description: [
      "Developed a Sentiment Analysis App using GPT-3.5 API and Python to automate HR processes, improving efficiency.",
      "Used Pair.Gov.SG platform and prompt engineering techniques to execute test cases, improving software.",
      "Automated repetitive workflows using Microsoft Power Automate, streamlining operations for employees.",
      "Conducted research on government tools and products, gaining insights into digital infrastructure on GCC and SGTS.",
    ],
    icon: CgWorkAlt,
    date: "December 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Text To Speech",
    description:
      "Developed a Text to Speech web application demonstrating frontend proficiency, enabling real-time text-to-speech conversion using Web Speech API. Deployed on Vercel.",
    tags: ["html", "css", "javascript"],
    imageUrl: textspeech,
    repoUrl: "https://github.com/akileshjayakumar/text-to-speech",
    liveUrl: "https://akilesh-text-to-speech.vercel.app",
  },
  {
    title: "ChatGPT Clone",
    description:
      "Developed a ChatGPT clone showcasing backend proficiency by enabling real-time interactions with the chatbot via GPT-3.5 API calls. Deployed on Render.",
    tags: ["html", "css", "javascript", "node.js", "express.js", "openai api"],
    imageUrl: gptclone,
    repoUrl: "https://github.com/akileshjayakumar/akileshgpt-chatgpt-clone",
    liveUrl: "https://akileshgpt-chatgpt-clone.onrender.com",
  },
  {
    title: "Coin Flip Game",
    description:
      "Developed an engaging coin flip game, enhancing user interaction through clickable elements and simulating coin-flipping animations. Deployed on GitHub Pages.",
    tags: ["html", "css", "javascript"],
    imageUrl: flipcoin,
    repoUrl: "https://github.com/akileshjayakumar/flip-the-coin",
    liveUrl: "https://akileshjayakumar.github.io/flip-the-coin",
  },
  {
    title: "Password Generator",
    description:
      "Developed a password generator tool, focusing on user experience to deliver unique and secure passwords. Deployed on GitHub Pages.",
    tags: ["html", "css", "javascript"],
    imageUrl: passwordgen,
    repoUrl: "https://github.com/akileshjayakumar/password-generator",
    liveUrl: "https://akileshjayakumar.github.io/password-generator",
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
