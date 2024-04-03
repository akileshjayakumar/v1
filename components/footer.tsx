import React from "react";

export default function Footer() {
  return (
    <footer className="mb-[2rem] px-[2rem] tracking-wider text-4xl text-center text-white">
      <h3 className="mb-[6rem]">
        {/* Updated styling and animation */}
        <a
          href="https://github.com/akileshjayakumar?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block sm:py-2 sm:px-2 sm:text-4xl text-base py-[1rem] px-[1rem]
          tracking-wider bg-gradient-to-r from-green-500 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 
          text-white font-bold rounded-full shadow-lg duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
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
