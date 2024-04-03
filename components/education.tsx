"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { IoSchoolSharp } from "react-icons/io5";

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EDUCATION</SectionHeading>
      {educationData.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-900 shadow-md rounded-lg m-4 p-6"
        >
          <div className="flex items-center mb-4">
            <IoSchoolSharp className="text-xl text-gray-600 dark:text-gray-300 mr-2" />
            <h1 className="text-xl font-bold capitalize">{item.institution}</h1>
          </div>
          <h2 className="text-lg font-semibold capitalize mb-1">
            {item.degree}
          </h2>
          <h3 className="text-sm mb-4">{item.date}</h3>
          <div className="flex justify-between items-center">
            <div>
              {item.modules && (
                <div className="mt-4">
                  <h4 className="text-md font-semibold mb-2">Modules:</h4>
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    {item.modules.map((module, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {module}
                      </li>
                    ))}
                  </ul>
                  {item.certificateUrl && (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border-2 border-red-500 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out"
                      aria-label="View Certificate"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
