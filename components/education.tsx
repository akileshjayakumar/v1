"use client";

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

  return (
    <section
      id="education"
      ref={ref}
      className="mt-[9rem] max-w-[45rem] text-center sm:mb-40 scroll-mt-28 px-4 sm:px-0"
    >
      <SectionHeading>EDUCATION</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#ddd" : "#333"}>
        {educationData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: theme === "light" ? "#ffffff" : "#1f2937",
              boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.1)",
              border:
                theme === "light" ? "2px solid #e5e7eb" : "2px solid #374151",
              color: theme === "light" ? "#1f2937" : "#f3f4f6",
              textAlign: "left",
              padding: "0.7rem 0.7rem",
            }}
            contentArrowStyle={{
              borderRight: "8px solid #fff",
            }}
            date={item.date}
            icon={<item.icon />}
            iconStyle={{
              background: theme === "light" ? "#60a5fa" : "#000000",
              color: "#fff",
              boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
              fontSize: "1.5rem",
              border: "3px solid #fff",
            }}
          >
            <h3 className="font-bold text-lg capitalize mr[1rem]">
              {item.institution} | {item.degree}
            </h3>
            <br />
            <ul
              className="list-disc pl-4 mt-2 space-y-2 m-2"
              style={{
                color: theme === "light" ? "#374151" : "#e5e7eb",
                textAlign: "left",
              }}
            >
              {item.subjects.map((subject, idx) => (
                <li key={idx} className="text-base leading-relaxed">
                  {subject}
                </li>
              ))}
            </ul>
            <button
              className="button-style bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 flex justify-center items-center rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              onClick={() => handleCertificateClick(item.certificateUrl)}
            >
              View Certificate | Transcript
            </button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
