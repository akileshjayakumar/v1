import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import "@/app/globals.css";

function ToolsUsed() {
  return (
    <div className="flex items-center space-x-2">
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1"
      >
        <TbBrandNextjs
          size={30}
          title="Next.js"
          className="text-white space-x-1 transition duration-300 ease-in-out transform hover:scale-125"
        />
      </a>
      <span className="text-xl text-white">+</span>
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1"
      >
        <SiTypescript
          size={30}
          title="TypeScript"
          className="text-blue-600 space-x-1 transition duration-300 ease-in-out transform hover:scale-125"
        />
      </a>
      <span className="text-xl text-white">+</span>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1"
      >
        <SiTailwindcss
          size={30}
          title="Tailwind CSS"
          className="text-cyan-500 space-x-1 transition duration-300 ease-in-out transform hover:scale-125"
        />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mb-10 px-4 tracking-wider text-center text-white">
      <h3 className="mb-16">
        <a
          href="https://github.com/akileshjayakumar?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xl py-4 px-9 tracking-wider bg-gradient-to-r from-green-400 to-blue-500 hover:from-cyan-500 hover:to-cyan-600 text-white 
          font-bold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          More projects on my GitHub!
        </a>
      </h3>
      <div className="font-bold flex-col flex justify-center items-center">
        © 2024 Akilesh Jayakumar | Built with <br />
        <br /> <ToolsUsed />
      </div>
    </footer>
  );
}

export default Footer;
