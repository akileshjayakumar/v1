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
      <p>
        Hey there! I am a final year Computer Science student at{" "}
        <a
          href="https://www.uow.edu.au/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          University of Wollongong (SIM Campus)
        </a>{" "}
        in Singapore, focusing on Big Data and Cybersecurity. <br />
        <br />
      </p>

      <br />
      <p>
        I'm passionate about refining my skills and creating impactful
        applications. I'm particularly keen on honing my software development
        skills further. I love delving into this area and getting involved in
        projects. I'm always up for a challenge and eager to learn and grow
        along the way. Let's connect! 😊
      </p>
    </motion.section>
  );
}
