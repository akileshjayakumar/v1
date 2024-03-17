"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");
  const { theme } = useTheme();

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EDUCATION</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light" ? "#f9fafb" : "rgba(255, 255, 255, 0.12)",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              textAlign: "left",
              padding: "32px", // Increased padding
              borderRadius: "8px",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "7px solid #cbd5e1"
                  : "7px solid rgba(255, 255, 255, 0.25)",
            }}
            date={item.date}
            icon={<item.icon />}
            iconStyle={{
              background:
                theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3 className="font-bold text-xl capitalize">{item.institution}</h3>{" "}
            {/* Increased font size */}
            <h4 className="font-semibold text-lg capitalize">
              {item.degree}
            </h4>{" "}
            {/* Increased font size */}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
