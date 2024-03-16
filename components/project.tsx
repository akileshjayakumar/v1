import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  repoUrl,
  liveUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group sm:mb-8 last:mb-0"
    >
      <section
        className="bg-black mb-[2rem] mt-9 sm:h-[27.5rem] max-w-[60rem]
        rounded-lg overflow-hidden sm:pr-8 relative transition sm:group-even:pl-8 border border-white"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-4xl font-semibold text-white">{title}</h3>
          <p className="mt-2 leading-relaxed text-white">{description}</p>

          <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-800 px-3 py-1 text-[0.9rem] border-gray-600 tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-[2rem] flex gap-4 mb-[1rem]">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-style bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 flex justify-center items-center rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              style={{ minWidth: "120px", minHeight: "40px" }}
            >
              GitHub Repo
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-style bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 flex justify-center items-center rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              style={{ minWidth: "120px", minHeight: "40px" }}
            >
              Live Site
            </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Projects Image"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
