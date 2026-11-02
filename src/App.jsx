import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // The sections don't exist when the browser handles a link like /#skills, so jump once they do
  useEffect(() => {
    const section = document.getElementById(window.location.hash.slice(1));
    if (!section) return;
    const jump = () => section.scrollIntoView({ behavior: "instant" });
    jump();
    // Text rewraps when the web fonts arrive, which moves the section
    document.fonts.ready.then(jump);
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Journey />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
