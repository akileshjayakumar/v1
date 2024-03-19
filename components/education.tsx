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

  const handleCertificateClick = (url: string | undefined) => {
    if (typeof url === "string") {
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
              width: "40%", // Increased width
              maxWidth: "100px", // Removed max-width constraint
            }}
            contentArrowStyle={{
              borderRight: "7px solid " + (theme === "light" ? "#fff" : "#333"),
            }}
            date={item.date}
            icon={<item.icon />}
            iconStyle={{
              background: theme === "light" ? "#fff" : "#333",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              color: theme === "light" ? "#333" : "#fff",
            }}
          >
            <h3 className="font-bold text-xl capitalize">{item.institution}</h3>
            <h4 className="font-semibold text-lg capitalize">{item.degree}</h4>
            {item.modules && (
              <ul className="list-disc pl-5">
                {item.modules.map((module, idx) => (
                  <li key={idx}>{module}</li>
                ))}
              </ul>
            )}
            {item.certificateUrl && (
              <button
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleCertificateClick(item.certificateUrl)}
              >
                View Certificate
              </button>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
