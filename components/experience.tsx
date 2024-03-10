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
    <section
      id="experience"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>EXPERIENCE</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={<item.icon />}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3
                className="font-bold capitalize"
                style={{ textAlign: "left" }}
              >
                {item.company}
              </h3>

              <h4
                className="font-semibold capitalize"
                style={{ textAlign: "left" }}
              >
                {item.title}
              </h4>
              <br />
              <ul
                className="m-2 !mt-1"
                style={{
                  color: theme === "light" ? "#4b5563" : "#e5e7eb",
                  padding: 0,
                  direction: "rtl", // Right-to-left direction for the ul
                }}
              >
                {item.description.map((point, idx) => (
                  <li
                    key={idx}
                    style={{
                      direction: "ltr", // Left-to-right direction for the text
                      textAlign: "right", // Align text to the right
                      width: "100%", // Ensure full width for proper alignment
                      marginBottom: "1rem", // Add space below each bullet point
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
