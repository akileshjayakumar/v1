"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("ABOUT");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>ABOUT</SectionHeading>
      <p className="items-center justify-center">
        Hello there! I'm currently a final-year Computer Science student at the{" "}
        <a
          className="text-blue-500"
          href="https://www.uow.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          University of Wollongong (SIM Campus)
        </a>
        , focusing on Big Data and Cybersecurity. I'm always up for taking on
        fresh challenges and am constantly on the lookout for opportunities to
        learn and grow my skill set.
      </p>

      <p>
        Hello there! I'm currently a final-year Computer Science student at the
        University of Wollongong (SIM Campus), focusing on Big Data and
        Cybersecurity. I'm always up for taking on fresh challenges and am
        constantly on the lookout for opportunities to learn and grow my skill
        set.
      </p>

      <br />
    </motion.section>
  );
}
