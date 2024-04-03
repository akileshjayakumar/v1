import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 tracking-wider text-4xl text-center text-white">
      <h3 className="mb-[4rem]">
        {/* Updated styling and animation */}
        <a
          href="https://github.com/akileshjayakumar?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-2 px-4 
          tracking-wider bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 
          text-white font-bold rounded-full shadow-lg transition duration-300 ease-in-out 
          transform hover:-translate-y-1 hover:scale-110 hover:rotate-2"
        >
          more projects on my github!
        </a>
      </h3>

      <small className="mb-[1rem] block text-xs font-bold">
        © 2024 Akilesh Jayakumar | Created with Next.js, TypeScript, and
        Tailwind CSS | Designed with ❤️
      </small>
    </footer>
  );
}
