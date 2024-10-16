import About from "@/portfolio/components/about";
import Intro from "@/portfolio/components/intro";
import Projects from "@/portfolio/components/projects";
import Skills from "@/portfolio/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
