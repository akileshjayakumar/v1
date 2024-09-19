import { SiLangchain } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiDocker } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiNeo4J } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

import nextjs14 from "@/public/nextjs14.png";

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

export const projectsData = [
  {
    title: "Next.js14 ChatBot",
    description:
      "Developed an interactive ChatBot using Next.js and Vercel's SDK, featuring real-time responses and a user-friendly interface, hosted on Vercel with continuous integration from GitHub.",
    tags: ["next.js", "typescript", "tailwindcss", "openai api"],

    imageUrl: nextjs14,
    repoUrl: "https://github.com/akileshjayakumar/nextjs14-sdk-chatbot",
    liveUrl: "https://nextjs14-sdk-chatbot.vercel.app/",
  },
] as const;

export const skillsData = {
  "frameworks & languages": [
    { name: "LangChain", logo: SiLangchain },
    { name: "Next.js", logo: TbBrandNextjs },
    { name: "Python", logo: FaPython },
    { name: "SQL", logo: DiMysql }, 
    { name: "JavaScript/TypeScript", logo: FaJsSquare }, 
    { name: "HTML/CSS", logo: FaHtml5 }, 
  ],
  databases: [
    { name: "Neo4j", logo: SiNeo4J }, 
    { name: "MongoDB", logo: SiMongodb }, 
    { name: "SiOracle", logo: FaDatabase }, 
  ],
  devTools: [
    { name: "Docker", logo: SiDocker },
    { name: "Git", logo: SiGit },
    { name: "GitHub", logo: SiGithub }
  ],
} as const;
