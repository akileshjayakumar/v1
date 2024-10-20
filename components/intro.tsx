"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { useSectionInView } from "@/lib/hooks";
import { useState, useEffect, useRef } from "react";
import { PiMicrosoftOutlookLogoDuotone } from "react-icons/pi";
import { GrDocumentPdf } from "react-icons/gr";

const fullText = [
  "welcome to my portfolio website!",
  "i love learning new technologies.",
  "i am currently learning RAG, AWS and Neo4j.",
  "i love building and designing software.",
  "sci-fi and comic book movies are my favorites.",
  "when i'm not coding, i'm on wordle.",
  "learn more about me using my rag app!",
  "let's connect!",
];

export default function Intro() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [hasVisited, setHasVisited] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
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
    if (hasVisited) {
      const currentText = fullText[loopNum % fullText.length];
      let timer: NodeJS.Timeout;

      const handleTyping = () => {
        setText(currentText.substring(0, text.length + 1));
        setTypingSpeed(40);
      };

      const handleDeleting = () => {
        setText(currentText.substring(0, text.length - 1));
        setTypingSpeed(20);
      };

      if (!isDeleting && text === currentText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(1);
      } else if (!isDeleting) {
        timer = setTimeout(handleTyping, typingSpeed);
      } else {
        timer = setTimeout(handleDeleting, typingSpeed);
      }

      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, loopNum, typingSpeed, hasVisited]);

  useEffect(() => {
    setHasVisited(true);
  }, []);

  const { ref } = useSectionInView("HOME", 0.5);
  const iconStyle = isMobile ? "text-5xl" : "text-5xl";

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[90%] mx-auto text-center sm:mb-0 scroll-mt-[100rem] px-4 sm:px-0"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
          <Image
            src="/profilephoto.jpg"
            alt="profilephoto"
            width={350}
            height={350}
            quality={100}
            priority={true}
            className="rounded-full mb-4 sm:mb-6 object-cover border-[0.2rem] border-[cyan] no-shadow"
          />
        </motion.div>

        <motion.h1 className="font-bold tracking-wider mt-4 sm:text-5xl text-3xl text-white">
          hi, i'm akilesh
        </motion.h1>

        <motion.h1 className="tracking-wider font-medium mt-4 sm:text-2xl text-xl text-white">
          <span
            ref={textRef}
            style={{ whiteSpace: isMobile ? "normal" : "nowrap" }}
          >
            {text}
          </span>
          <span className="typing-cursor">_</span>
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col items-center justify-center m-9 sm:m-8 mb-[15rem] mt-[2rem] text-2xl font-bold text-white"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex gap-[1rem] m-[1rem] sm:gap-[3rem]">
          <a
            href="https://www.linkedin.com/in/akileshjayakumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className={
                iconStyle +
                " hover:scale-110 transition-transform text-blue-600"
              }
            />
          </a>

          <a
            href="https://github.com/akileshjayakumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className={iconStyle + " hover:scale-110 transition-transform"}
            />
          </a>

          <a
            href="https://x.com/StrangeDoctorGo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine
              className={
                iconStyle +
                " hover:scale-110 transition-transform text-orange-600"
              }
            />
          </a>

          <a
            href="mailto:jayakuma006@mymail.sim.edu.sg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiMicrosoftOutlookLogoDuotone
              className={iconStyle + " hover:scale-110 transition-transform"}
            />
          </a>

          <a
            href="/AkileshJayakumarResume.pdf"
            download="AkileshJayakumarResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrDocumentPdf
              className={
                iconStyle +
                " hover:scale-110 transition-transform text-blue-600"
              }
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
