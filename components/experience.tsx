"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("EXPERIENCE");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EXPERIENCE</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light" ? "#f9fafb" : "rgba(31, 38, 45, 0.85)",
              color: theme === "light" ? "#333" : "#fff",
              boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
              border:
                theme === "light"
                  ? "1px solid #eaeaea"
                  : "1px solid rgba(255, 255, 255, 0.15)",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "left",
              transition: "all 0.3s ease-in-out",
              opacity: "1",
              width: "50%", // Increased width
              maxWidth: "none", // Removed max-width constraint
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
            <h3 className="font-bold text-lg capitalize">{item.company}</h3>
            <h4 className="font-semibold text-md capitalize">{item.title}</h4>
            <ul
              className="list-disc pl-4 mt-2 space-y-2"
              style={{
                color: theme === "light" ? "#374151" : "#e5e7eb",
                textAlign: "left",
              }}
            >
              {item.description.map((point, idx) => (
                <li key={idx} className="text-base leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
