"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { IoSchoolSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      id="education"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>EDUCATION</SectionHeading>
      {educationData.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-900 shadow-lg rounded-lg m-4 p-6 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.03 }}
          layout
        >
          <div className="flex items-center mb-4">
            <IoSchoolSharp className="text-xl text-primary-500 dark:text-primary-400 mr-2" />
            <h1 className="text-2xl font-bold capitalize">
              {item.institution}
            </h1>
          </div>
          <h2 className="text-lg font-semibold capitalize mb-2">
            {item.degree}
          </h2>
          <p className="text-sm mb-3">{item.date}</p>
          <p>Modules:</p> <br />
          {item.modules && (
            <ul className="list-none space-y-2 pl-4 text-sm">
              {item.modules.map((module, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-primary-500 dark:text-primary-400 mr-2">
                    •
                  </span>
                  <p className="leading-relaxed">{module}</p>
                </li>
              ))}
            </ul>
          )}
          {item.certificateUrl && (
            <a
              href="https://dashboard.accredify.io/verify?id=c903b57a-a109-44c3-8d04-f45d8536bc1f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out"
              aria-label="View Certificate"
            >
              View Certificate
            </a>
          )}
        </motion.div>
      ))}
    </motion.section>
  );
}
