"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import "/app/animation.css";

const fullText = [
  "hi, i'm akilesh!",
  "என் பெயர் அகிலேஷ்!",
  "我的名字是阿基莱什!",
  "i am passionate about software engineering and cybersecurity.",
  "i enjoy learning new technologies and frameworks.",
  "i am currently learning aws.",
  "i love solving puzzles and 3x3 rubik's cube.",
  "cardistry and magic tricks are my hobbies.",
  "i am an avid fan of sci-fi and comic book movies.",
  "let's connect!",
];

export default function Intro() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const textRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const currentText = fullText[loopNum % fullText.length];
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      setText(currentText.substring(0, text.length + 1));
      setTypingSpeed(30);
    };

    const handleDeleting = () => {
      setText(currentText.substring(0, text.length - 1));
      setTypingSpeed(30);
    };

    if (!isDeleting && text === currentText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150); // Resetting the speed for the next round of typing
    } else if (!isDeleting) {
      timer = setTimeout(handleTyping, typingSpeed);
    } else {
      timer = setTimeout(handleDeleting, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const { ref } = useSectionInView("HOME", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const iconStyle = isMobile ? "text-4xl" : "text-5xl";

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center text-white sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/profile-photo.jpg"
            alt="profile-photo"
            width="390"
            height="390"
            quality="100"
            priority={true}
            className="rounded-full object-cover border-[0.3rem] border-white no-shadow"
          />
        </motion.div>

        <motion.h1
          className="text-2xl m-[3.7rem] font-medium sm:text-4xl text-white"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span
            className="font-medium"
            ref={textRef}
            style={{ whiteSpace: isMobile ? "normal" : "nowrap" }}
          >
            {text}
          </span>
          <span className="typing-cursor">|</span>
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-[1rem] mb-[2rem] text-3xl font-bold text-white"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex gap-4">
          <a
            href="https://twitter.com/StrangeDoctorGo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine
              className={
                iconStyle + " hover:scale-110 transition-transform text-white"
              }
            />
          </a>

          <a
            href="https://www.linkedin.com/in/akileshjayakumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className={
                iconStyle + " hover:scale-110 transition-transform text-white"
              }
            />
          </a>

          <a
            href="https://github.com/akileshjayakumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className={
                iconStyle + " hover:scale-110 transition-transform text-white"
              }
            />
          </a>
        </div>

        <a
          className="bg-black p-3 flex items-center justify-center border rounded-full focus:scale-[1] hover:scale-[1.11] active:scale-105 transition cursor-pointer"
          style={{
            borderColor: "rgb(16, 219, 192)",
            borderWidth: "4px",
            borderStyle: "solid",
          }}
          href="./Akilesh Jayakumar Resume.pdf"
          download="akileshjayakumar_resume.pdf"
        >
          <span
            style={{ display: "inline-block", textAlign: "center" }}
            className="text-white mr-[0.2rem]"
          >
            CV
          </span>
          <LuDownload className="text-5xl opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
