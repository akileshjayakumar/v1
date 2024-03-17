"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import "@/app/globals.css";

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");
  const { theme } = useTheme();

  const handleCertificateClick = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EDUCATION</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{
              background:
                theme === "light" ? "#f9fafb" : "rgba(255, 255, 255, 0.12)",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              padding: "40px",
              borderRadius: "10px",
              width: "80%", // Increase the width of the card
              maxWidth: "1200px", // Optional: you can set a max width
              textAlign: "left",
            }}
            contentArrowStyle={{
              borderRight:
                "7px solid " + (theme === "light" ? "#f0f0f0" : "#333"),
            }}
            date={item.date}
            icon={<item.icon />}
            iconStyle={{
              background: theme === "light" ? "#fff" : "#333",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            <h3
              className="font-bold text-xl capitalize"
              style={{ marginBottom: "0.5rem" }}
            >
              {item.institution}
            </h3>
            <h4
              className="font-semibold text-lg capitalize"
              style={{ marginBottom: "1rem" }}
            >
              {item.degree}
            </h4>
            {item.modules && (
              <ul className="list-disc pl-4 mt-1 mb-2">
                {item.modules.map((module, idx) => (
                  <li key={idx} className="module-item">
                    {module}
                  </li>
                ))}
              </ul>
            )}
            {item.certificateUrl && (
              <button
                className="certificate-button"
                style={{
                  backgroundColor: "#4a90e2",
                  color: "#fff",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  item.certificateUrl
                    ? handleCertificateClick(item.certificateUrl)
                    : null
                }
              >
                View Diploma Certificate | Transcript
              </button>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
