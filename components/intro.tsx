"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import "/app/animation.css";
import githublogo from "@/public/github-logo.png";
import linkinlogo from "@/public/linkedin-logo.png";

const fullText = [
  "Hi, I'm Akilesh!",
  "என் பெயர் அகிலேஷ்!",
  "嗨，我叫阿基莱什!",
  "Hai, saya Akilesh!",
  "I am passionate about software engineering and cybersecurity.",
  "I enjoy coding and learning new technologies.",
  "Python and JavaScript are my favorite languages.",
  "I am currently learning Go and Rust.",
  "I am a tea enthusiast.",
  "I am a music lover.",
  "I love solving puzzles and brain teasers.",
  "I am a big fan of science fiction and comic book movies.",
  "In my free time, I dabble in graphic design.",
  "Let's connect!",
];

export default function Intro() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentText = fullText[loopNum % fullText.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prevText) => prevText.substring(0, prevText.length - 1));
        setTypingSpeed((prevSpeed) => (text.length > 10 ? 20 : 50));
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prevText) => currentText.substring(0, prevText.length + 1));
        setTypingSpeed((prevSpeed) => (text.length > 10 ? 20 : 50));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
    }

    setTextWidth(textRef.current ? textRef.current.offsetWidth : 0);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  useEffect(() => {
    const maxTextWidth = Math.max(...fullText.map((str) => str.length));
    setTextWidth(maxTextWidth * 10);

    setTimeout(() => {
      setIsDeleting(false);
    }, 1000);
  }, []);

  const { ref } = useSectionInView("HOME", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const renderMobileButtonStyles = () => {
    if (isMobile) {
      return {
        width: "[3rem]",
        height: "[3rem]",
        justifyContent: "center",
      };
    } else {
      return {};
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/profile-photo.jpg"
              alt="profile-photo"
              width="400"
              height="400"
              quality="100"
              priority={true}
              className="rounded-full object-cover border-[0.3rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
        <motion.h1
          className="text-2xl m-[3.7rem] font-medium sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-medium" ref={textRef}>
            {text}
          </span>
          <span className="typing-cursor">|</span>{" "}
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-[3rem] text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        {/* LinkedIn Button */}
        <a
          className={
            "bg-white mr-[1rem] mb-[0.4rem] p-5 text-gray-700 hover:text-gray-950 flex items-center gap-1 rounded-full focus:scale-[1.9] hover:scale-[1.9] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" +
            (isMobile ? " mobile-style" : " w-[4rem] h-[4rem]")
          }
          href="https://www.linkedin.com/in/akileshjayakumar/"
          target="_blank"
          rel="noopener noreferrer"
          style={isMobile ? renderMobileButtonStyles() : undefined}
        >
          <Image src={linkinlogo} alt="LinkedIn Logo" width={30} height={30} />
        </a>

        {/* GitHub Button */}
        <a
          className={
            "bg-white mr-[1rem] mb-[0.4rem] p-5 text-gray-700 hover:text-gray-950 flex items-center gap-1 rounded-full focus:scale-[1.9] hover:scale-[1.9] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" +
            (isMobile ? " mobile-style" : " w-[4rem] h-[4rem]")
          }
          href="https://github.com/akileshjayakumar"
          target="_blank"
          rel="noopener noreferrer"
          style={renderMobileButtonStyles()}
        >
          <Image src={githublogo} alt="GitHub Logo" width={30} height={30} />
        </a>

        {/* Download Button */}
        <a
          className={
            "bg-black mr-[1rem] mb-[0.4rem] p-5 flex items-center justify-center gap-1 rounded-full focus:scale-[1.9] hover:scale-[1.9] active:scale-105 transition cursor-pointer borderBlack " +
            (isMobile ? " mobile-style" : " w-[6rem] h-[3.5rem]")
          }
          href="./Akilesh Jayakumar Resume.pdf"
          download="akileshjayakumar_resume.pdf"
        >
          <span style={{ display: "inline-block", textAlign: "center" }}>
            CV
          </span>{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
