"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("SKILLS");

  return (
    <section
      id="skills"
      ref={ref}
      className="mt-[9rem] max-w-[45rem] text-center sm:mb-40 scroll-mt-28 px-4 sm:px-0"
    >
      <SectionHeading>SKILLS</SectionHeading>
      {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h3 className="text-2xl tracking-wider font-medium lowercase text-white">
            {category}
          </h3>
          <ul className="flex m-5 flex-wrap justify-center gap-3 text-lg">
            {skills.map((skill, skillIndex) => (
              <motion.li
                className="bg-gray-800 lowercase tracking-wider border border-gray-600 shadow-sm rounded-xl px-5 py-3 text-white"
                key={skill}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={skillIndex}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
