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
import { IconType } from "react-icons";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStreamlit } from "react-icons/si";
import langgraph from "@/public/icons/lang.png";

type Skill = {
  name: string;
  logo: IconType;
  color: string;
};

export const skillsData: Record<string, Skill[]> = {
  "frameworks & languages": [
    { name: "LangChain", logo: SiLangchain, color: "#8AC6F4" },
    { name: "Next.js", logo: TbBrandNextjs, color: "#fff" },
    { name: "Python", logo: FaPython, color: "#4B8BBE" },
    { name: "SQL", logo: DiMysql, color: "#00758F" },
    { name: "JavaScript/TypeScript", logo: FaJsSquare, color: "#F7DF1E" },
    { name: "HTML/CSS", logo: FaHtml5, color: "#E34F26" },
    { name: "Tailwind CSS", logo: RiTailwindCssFill, color: "#06b6d4" },
    { name: "Streamlit", logo: SiStreamlit, color: "#FF4B4B" },
  ],
  databases: [
    { name: "Neo4j", logo: SiNeo4J, color: "#008CC1" },
    { name: "MongoDB", logo: SiMongodb, color: "#4FAA4F" },
    { name: "Oracle", logo: FaDatabase, color: "#FF0000" },
  ],
  devTools: [
    { name: "Docker", logo: SiDocker, color: "#2496ED" },
    { name: "Git", logo: SiGit, color: "#F05033" },
    { name: "GitHub", logo: SiGithub, color: "#fff" },
  ],
} as const;

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
    title: "LangGraph Agentic Chatbot",
    description:
      "Developed an LLM Agent capable of answering user queries by searching and retrieving real-time information from the web.",
    tags: ["python", "gradio", "langgraph", "tavily", "openai"],
    imageUrl: langgraph,
    repoUrl:
      "https://huggingface.co/spaces/akileshjayakumar/LangGraph-Agentic-Chatbot/tree/main",
    liveUrl:
      "https://huggingface.co/spaces/akileshjayakumar/LangGraph-Agentic-Chatbot",
  },
];
