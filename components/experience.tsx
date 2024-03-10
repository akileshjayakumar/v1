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
      className="mb-28 scroll-mt-28 text-center sm:mb-40" // max-width removed for wider card
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
                textAlign: "right", // Text aligned to the right
                padding: "2rem", // Increased padding for a wider card
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
                fontSize: "1rem",
              }}
            >
              <h3 className="font-bold capitalize">{item.company}</h3>
              <h4 className="font-semibold capitalize">{item.title}</h4>
              <br />
              <ol
                className="m-2 !mt-1"
                style={{
                  color: theme === "light" ? "#4b5563" : "#e5e7eb",
                  listStylePosition: "inside", // Ensures bullets are inside and visible
                  textAlign: "right", // Aligns bullets and text to the right
                }}
              >
                {item.description.map((point, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: "1rem", // Space between bullet points
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ol>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
