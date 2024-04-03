"use client";

import React from "react";
import SectionHeading from "./section-heading";
// Removed import for `VerticalTimeline` and `VerticalTimelineElement`.
import "react-vertical-timeline-component/style.min.css"; // This import can be removed as well if you're not using the timeline component.
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("EXPERIENCE");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EXPERIENCE</SectionHeading>
      {experiencesData.map((item, index) => (
        // The return statement for the map function to properly return JSX.
        // Also, `key` should be part of the top-level element returned by this map function.
        <div key={index} className="experience-item">
          <h3 className="font-bold tracking-wider leading-relaxed text-xl capitalize">
            {item.company}
          </h3>
          <h4 className="font-semibold tracking-wider leading-relaxed text-md capitalize">
            {item.title}
          </h4>
          <br />
          <ul
            className="list-disc pl-4 mt-2 space-y-2 m-2"
            style={{
              color: theme === "light" ? "#374151" : "#e5e7eb",
              textAlign: "left",
            }}
          >
            {item.description.map((point, idx) => (
              <li
                key={idx}
                className="text-base tracking-wider leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
