"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { MdWorkOutline } from "react-icons/md";
import { motion } from "framer-motion";

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>EXPERIENCE</SectionHeading>
      {experiencesData.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-900 shadow-lg rounded-lg m-4 p-6 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.03 }}
          layout
        >
          <div className="flex items-center mb-4">
            <MdWorkOutline className="text-xl text-primary-500 dark:text-primary-400 mr-2" />
            <h1 className="text-2xl font-bold capitalize">{item.company}</h1>
          </div>
          <h2 className="text-lg font-semibold capitalize mb-2">
            {item.title}
          </h2>
          <p className="text-sm mb-3">{item.date}</p>
          {item.description && (
            <ul className="list-none space-y-2 pl-4 text-sm">
              {item.description.map((module, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-primary-500 dark:text-primary-400 mr-2">
                    •
                  </span>
                  <p className="leading-relaxed">{module}</p>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </motion.section>
  );
}
