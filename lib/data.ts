import { CgWorkAlt } from "react-icons/cg";
import nextjs14 from "@/public/nextjs14.png";
import sentiment from "@/public/sentiment.png";
import email from "@/public/email.png";

import { TbBrandNextjs } from "react-icons/tb";

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
    ],
    icon: CgWorkAlt,
    date: "December 2023 - April 2024",
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
  {
    title: "Sentiment Analysis Web App",
    description:
      "Engineered a real-time sentiment analysis web app using Python and Streamlit, integrating LangChain for AI-driven analysis and Matplotlib for data visualization.",
    tags: ["python", "streamlit", "langchain", "matplotlib"],
    imageUrl: sentiment,
    repoUrl:
      "https://github.com/akileshjayakumar/sentiment-analysis-app-streamlit",
    liveUrl: "",
  },
  {
    title: "Phishing Email Detector",
    description:
      "Developed a phishing email detection web application using Python and Streamlit, featuring real-time analysis and risk assessment through regex and pattern detection to educate users on email security.",
    tags: ["python", "streamlit"],
    imageUrl: email,
    repoUrl:
      "https://github.com/akileshjayakumar/phishing-email-detector-streamlit",
    liveUrl: "https://phishing-email-detector.streamlit.app/",
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
