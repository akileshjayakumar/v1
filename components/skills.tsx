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
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>SKILLS</SectionHeading>
      {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
        <div key={categoryIndex}>
          <h3 className="text-xl font-semibold lowercase">{category}</h3>
          <ul className="flex m-5 flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skills.map((skill, skillIndex) => (
              <motion.li
                className="bg-white lowercase tracking-wider border border-gray-300 shadow-sm rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
