"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

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
      {educationData.map((item, index) => (
        <div
          key={index}
          className="education-item"
          style={{
            background:
              theme === "light" ? "#f9fafb" : "rgba(255, 255, 255, 0.12)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            padding: "40px",
            borderRadius: "10px",
            textAlign: "left",
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
              // Ensuring `handleCertificateClick` is called with a string.
              onClick={() =>
                item.certificateUrl &&
                handleCertificateClick(item.certificateUrl)
              }
            >
              View Diploma Certificate | Transcript
            </button>
          )}
        </div>
      ))}
    </section>
  );
}
