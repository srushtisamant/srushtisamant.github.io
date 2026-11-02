import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { education, experience } from "../data/portfolio.js";
import { Reveal, RichText, Section } from "./shared.jsx";

const tabs = [
  { id: "experience", label: "Experience", icon: "fas fa-briefcase" },
  { id: "education", label: "Education", icon: "fas fa-graduation-cap" },
];

const startYear = (entry) => entry.date.match(/\d{4}/)[0];

function TimelineEntry({ entry, year }) {
  return (
    <Reveal as="li" className={`timeline__entry${year ? " timeline__entry--year" : ""}`}>
      {year && (
        <span className="timeline__year" aria-hidden="true">
          {year}
        </span>
      )}
      <span className="timeline__dot" aria-hidden="true" />
      <div className="card timeline__card">
        <div className="logo-tile">
          <img src={entry.logo} alt={entry.logoAlt} loading="lazy" />
        </div>
        <div className="timeline__body">
          <h3>{entry.title}</h3>
          {entry.subtitle && <p className="timeline__subtitle">{entry.subtitle}</p>}
          <p className="timeline__meta">
            <i aria-hidden="true" className="fas fa-calendar-alt" /> {entry.date}
          </p>
          {entry.gpa && (
            <p className="timeline__meta">
              <i aria-hidden="true" className="fas fa-award" /> {entry.gpa}
            </p>
          )}
          {entry.bullets && (
            <ul className="timeline__bullets">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>
                  <RichText text={bullet} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Reveal>
  );
}

function Timeline({ entries }) {
  const ref = useRef(null);
  // The accent line fills in as the timeline scrolls past the middle of the screen
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });

  return (
    <div className="timeline" ref={ref}>
      <div className="timeline__track" aria-hidden="true">
        <motion.div className="timeline__fill" style={{ scaleY: scrollYProgress }} />
      </div>
      <ol>
        {entries.map((entry, i) => {
          // Only the first entry of each year gets a label
          const isNewYear = i === 0 || startYear(entries[i - 1]) !== startYear(entry);
          return (
            <TimelineEntry
              key={entry.title}
              entry={entry}
              year={isNewYear ? startYear(entry) : undefined}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default function Journey() {
  const [tab, setTab] = useState("experience");

  // Education is much shorter, so go back to the section top or the next section shows below it
  const selectTab = (id) => {
    setTab(id);
    document.getElementById("experience")?.scrollIntoView();
  };

  return (
    <Section id="experience" title="Experience & Education">
      <div className="tabs" role="tablist" aria-label="Experience and education">
        {tabs.map(({ id, label, icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            className={`tabs__button${tab === id ? " tabs__button--active" : ""}`}
            onClick={() => selectTab(id)}
          >
            {tab === id && (
              <motion.span
                layoutId="tab-pill"
                className="tabs__pill"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
            <span className="tabs__label">
              <i aria-hidden="true" className={icon} /> {label}
            </span>
          </button>
        ))}
      </div>
      <Timeline key={tab} entries={tab === "experience" ? experience : education} />
    </Section>
  );
}
