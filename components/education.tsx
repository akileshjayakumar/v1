import React from "react";
import SectionHeading from "@/components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { educationData } from "@/lib/data"; // Adjust the import path based on your file structure
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
              padding: "32px",
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
            <h3 className="font-bold text-xl capitalize">{item.institution}</h3>
            <h4 className="font-semibold text-lg">{item.degree}</h4>
            {item.certificateUrl && (
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Diploma Certificate
              </a>
            )}
            {item.modules && (
              <details className="mt-4">
                <summary className="cursor-pointer text-lg font-semibold">
                  Modules Completed
                </summary>
                <ul className="list-disc pl-6 mt-2">
                  {item.modules.map((module, idx) => (
                    <li key={idx}>{module}</li>
                  ))}
                </ul>
              </details>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
