"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("SKILLS");

  return (
    <section
      id="skills"
      ref={ref}
      className="mt-[9rem] max-w-[80rem] mx-auto text-center sm:mb-40 scroll-mt-28 px-4 sm:px-0"
    >
      <SectionHeading>SKILLS</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h3 className="text-2xl tracking-wider font-semibold lowercase text-white mb-4">
              {category.toUpperCase()}
            </h3>
            <ul className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={skillIndex}
                >
                  <div className="mt-4">
                    {/* Adding a hover animation to each logo */}
                    <motion.div
                      whileHover={{
                        scale: 1.1, // Scales up the logo on hover
                        transition: {
                          duration: 0.3, // Smooth transition duration
                        },
                      }}
                    >
                      {React.createElement(skill.logo, {
                        style: { height: "90px", width: "90px", color: "white" },
                      })}
                    </motion.div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
