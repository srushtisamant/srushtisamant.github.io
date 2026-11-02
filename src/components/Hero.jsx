import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/portfolio.js";

function useTyping(phrases, enabled) {
  const [text, setText] = useState(enabled ? "" : phrases[0]);

  useEffect(() => {
    if (!enabled) return undefined;
    let phrase = 0;
    let chars = 0;
    let typing = true;
    let timer;

    const step = () => {
      const current = phrases[phrase];
      if (typing && chars < current.length) {
        chars += 1;
        timer = setTimeout(step, 90);
      } else if (typing) {
        typing = false;
        timer = setTimeout(step, 2000);
      } else if (chars > 0) {
        chars -= 1;
        timer = setTimeout(step, 45);
      } else {
        typing = true;
        phrase = (phrase + 1) % phrases.length;
        timer = setTimeout(step, 400);
      }
      setText(phrases[phrase].slice(0, chars));
    };

    timer = setTimeout(step, 400);
    return () => clearTimeout(timer);
  }, [phrases, enabled]);

  return text;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const typed = useTyping(profile.phrases, !reduceMotion);

  return (
    <section id="about" className="section hero">
      <div className="hero__glow" aria-hidden="true" />
      <motion.div
        className="hero__content"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.12 }}
      >
        <div className="hero__text">
          <motion.h1 variants={item} className="hero__title">
            Hi, I am <span className="gradient-text">{profile.name}.</span>
          </motion.h1>
          <motion.p variants={item} className="hero__role" aria-label={`A ${profile.phrases[0]}`}>
            A {typed}
            <span className="hero__caret" aria-hidden="true" />
          </motion.p>
          <motion.div variants={item} className="hero__desc">
            <p>{profile.intro.join(" ")}</p>
          </motion.div>
          <motion.div variants={item} className="hero__actions">
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn--primary">
              Resume
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
              <i aria-hidden="true" className="fab fa-github" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
              <i aria-hidden="true" className="fab fa-linkedin" />
            </a>
          </motion.div>
        </div>
        <motion.div variants={item} className="hero__image">
          <img src={profile.image} alt={profile.imageAlt} width="240" height="240" />
        </motion.div>
      </motion.div>
    </section>
  );
}
