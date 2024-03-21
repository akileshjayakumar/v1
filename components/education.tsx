"use client";
// Importing necessary React components and hooks
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { TbSchool } from "react-icons/tb";

export const educationData = [
  {
    institution: "University of Wollongong (SIM Campus)",
    degree: "Bachelor of Computer Science, Big Data and Cybersecurity",
    date: "October 2022 - Present",
    icon: TbSchool,
    certificateUrl: undefined,
    subjects: [
      "CSCI203 Algorithms and Data Structures",
      "CSCI235 Database Systems",
      "CSCI251 Advanced Programming",
      "CSCI262 System Security",
      "CSCI317 Database Performance Tuning",
      "CSIT302 Cybersecurity",
      "CSIT314 Software Development Methodologies",
      "MATH221 Mathematics for Computer Science",
    ],
  },
  {
    institution: "Singapore Institute of Management (SIM Campus)",
    degree: "Diploma in Information Technology",
    date: "October 2021 - September 2022",
    icon: TbSchool,
    certificateUrl:
      "https://dashboard.accredify.io/verify?id=c903b57a-a109-44c3-8d04-f45d8536bc1f",
    subjects: [
      "ITSD001 Business Statistics with Python",
      "ITSD002 Problem Solving",
      "ITSD003 Communications and Networks",
      "ITSD004 Programming Fundamentals",
      "ITSD005 Database Management and Security",
      "ITSD006 Interaction Design",
      "ITSD007 IT Project Management",
      "ITSD008 Systems Development Techniques",
    ],
  },
];

export default function Education() {
  const { ref } = useSectionInView("EDUCATION");
  const { theme } = useTheme();
  const handleCertificateClick = (url: string | undefined) => {
    if (typeof url === "string") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // JSX for the education section
  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>EDUCATION</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            dateClassName="text-lg font-semibold text-right" // Aligning the date to the right
            icon={<item.icon />}
            iconStyle={{
              // Adjusting icon colors to match the design
              background: "#312e81",
              color: "#fff",
            }}
            contentStyle={{
              // Setting colors and padding to match the dark theme
              background: "#1f2937",
              color: "#f3f4f6",
              padding: "20px",
              borderRadius: "4px", // Add rounded corners if necessary
              border: "2px solid #374151", // Add border color
            }}
            contentArrowStyle={{
              // Adjust arrow style
              borderRight: "7px solid  #374151",
            }}
          >
            <h3 className="font-bold text-lg capitalize m-[6rem]">
              {item.institution} | {item.degree}
            </h3>
            <ul className="list-disc pl-4 mt-2 space-y-2 m-2">
              {item.subjects.map((subject, idx) => (
                <li key={idx} className="text-base leading-relaxed">
                  {subject}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleCertificateClick(item.certificateUrl)}
            >
              View Certificate
            </button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
