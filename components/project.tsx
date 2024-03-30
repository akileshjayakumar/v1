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
    >
      <motion.div
        whileHover={{
          scale: 1.11,
          translateX: 1,
          translateY: 1,
        }}
        className="bg-black mb-[2rem] mt-9 sm:h-[30rem] max-w-[60rem]
        rounded-lg overflow-hidden sm:pr-8 relative transition sm:group-even:pl-8 border-[cyan] border-[0.2rem] group"
      >
        <motion.div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-3xl font-semibold text-white">{title}</h3>
          <p className="mt-2 leading-relaxed text-white">{description}</p>

          <ul className="flex mt-[2rem] flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-800 px-4 py-1 text-[1rem] border-gray-600 tracking-wider text-white rounded-full"
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
        </motion.div>

        <motion.div className="absolute hidden sm:block top-8 -right-40 w-[28rem] rounded-t-lg shadow-2xl transition">
          <Image src={imageUrl} alt="Project Image" quality={100} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
