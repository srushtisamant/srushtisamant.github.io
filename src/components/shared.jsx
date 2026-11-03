import { motion } from "framer-motion";
import { navItems } from "../data/portfolio.js";

// Fades content up the first time it scrolls into view
export function Reveal({ children, delay = 0, className, as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}

export function Section({ id, title, children }) {
  // Home is the first nav item, so Projects is numbered 01
  const number = String(navItems.findIndex((item) => item.id === id)).padStart(2, "0");

  return (
    <section id={id} className="section">
      <Reveal as="h2" className="section__title">
        <span className="section__number" aria-hidden="true">
          {number}
        </span>
        {title}
      </Reveal>
      {children}
    </section>
  );
}

// Renders **double asterisks** from the data file as bold text
export function RichText({ text }) {
  return text
    .split("**")
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}
