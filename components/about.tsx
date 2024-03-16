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
      className="mb-28 max-w-[45rem] text-center leading-8 text-white sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>ABOUT</SectionHeading>
      <p className="items-center justify-center">
        Hi! I'm currently a final-year Computer Science student at the <br />
        <a
          className="text-blue-500 hover:text-blue-300"
          href="https://www.uow.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          University of Wollongong (SIM Campus)
        </a>{" "}
        , focusing on Big Data and Cybersecurity. I'm passionate about building
        and designing software that is both functional and user-friendly. I'm
        also interested in data science and UI/UX, and I'm always looking for
        opportunities to learn.
      </p>

      <br />
    </motion.section>
  );
}
