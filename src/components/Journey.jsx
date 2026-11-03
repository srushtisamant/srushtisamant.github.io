import { useState } from "react";
import { motion } from "framer-motion";
import { education, experience } from "../data/portfolio.js";
import { RichText, Section } from "./shared.jsx";

const lanes = [
  { label: "Experience", entries: experience },
  { label: "Education", entries: education },
];
const entries = lanes.flatMap((lane) => lane.entries);

const MONTHS = "JanFebMarAprMayJunJulAugSepOctNovDec";
const today = new Date();

// Dates count in months, so "Sep 2025" becomes year * 12 + month
const toMonths = (date) => {
  if (date === "Present") return today.getFullYear() * 12 + today.getMonth();
  const [month, year] = date.split(" ");
  return Number(year) * 12 + MONTHS.indexOf(month.slice(0, 3)) / 3;
};

const toSpan = (entry) => {
  const [start, end] = entry.date.split(" – ").map(toMonths);
  // Each span runs to the end of its last month
  return { start, end: end + 1 };
};

const firstYear = Math.floor(Math.min(...entries.map((entry) => toSpan(entry).start)) / 12);
const years = today.getFullYear() - firstYear + 1;
const axis = Array.from({ length: years }, (_, i) => firstYear + i);
const toPercent = (months) => ((months - firstYear * 12) / (years * 12)) * 100;

const formatDuration = ({ start, end }) => {
  const months = end - start;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y}y`, m && `${m}m`].filter(Boolean).join(" ");
};

function Details({ entry, inline }) {
  return (
    <>
      {!inline && (
        <div className="details__head">
          <div className="logo-tile">
            <img src={entry.logo} alt={entry.logoAlt} loading="lazy" />
          </div>
          <div>
            <h4>{entry.title}</h4>
            <p className="details__meta">
              {entry.date} · {formatDuration(toSpan(entry))}
            </p>
          </div>
        </div>
      )}
      {!inline && entry.subtitle && <p className="details__subtitle">{entry.subtitle}</p>}
      {!inline && entry.gpa && <p className="details__meta">{entry.gpa}</p>}
      {entry.bullets && (
        <ul className="details__bullets">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>
              <RichText text={bullet} />
            </li>
          ))}
        </ul>
      )}
      {entry.coursework && (
        <>
          <h5 className="details__label">Coursework</h5>
          <ul className="details__coursework">
            {entry.coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

function SpanRow({ entry, lane, selected, onSelect }) {
  const span = toSpan(entry);
  const left = toPercent(span.start);
  const right = toPercent(span.end);
  const expandable = Boolean(entry.bullets || entry.coursework);

  return (
    <li className={`span span--${lane.toLowerCase()}${selected ? " span--selected" : ""}`}>
      <button
        type="button"
        className="span__row"
        aria-expanded={expandable ? selected : undefined}
        onClick={(event) => onSelect(entry.title, event)}
      >
        <span className="span__label">
          <span className="logo-tile">
            <img src={entry.logo} alt={entry.logoAlt} loading="lazy" />
          </span>
          <span className="span__text">
            <span className="span__title">{entry.title}</span>
            <span className="span__date">{entry.date}</span>
            {entry.subtitle && (
              <span className="span__date">
                {entry.subtitle} · {entry.gpa}
              </span>
            )}
          </span>
          {expandable && (
            <i aria-hidden="true" className={`span__chevron fas fa-chevron-${selected ? "up" : "down"}`} />
          )}
        </span>
        <span className="span__track" style={{ "--years": years }} aria-hidden="true">
          <motion.span
            className={`span__bar${entry.date.endsWith("Present") ? " span__bar--live" : ""}`}
            style={{ left: `${left}%`, width: `${right - left}%` }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          {/* The label sits on whichever side of the bar has room */}
          <span
            className="span__duration"
            style={left > 50 ? { right: `calc(${100 - left}% + 0.4rem)` } : { left: `calc(${right}% + 0.4rem)` }}
          >
            {formatDuration(span)}
          </span>
        </span>
      </button>
      {selected && expandable && (
        <div className="span__details">
          <Details entry={entry} inline />
        </div>
      )}
    </li>
  );
}

export default function Journey() {
  const [selected, setSelected] = useState(entries[0].title);
  const panelEntry = entries.find((entry) => entry.title === selected) ?? entries[0];

  const select = (title, event) => {
    const button = event.currentTarget;
    const stacked = window.matchMedia("(max-width: 1100px)").matches;
    setSelected(stacked && title === selected ? null : title);
    // A row closing above this one can push it off the screen
    if (stacked) {
      requestAnimationFrame(() => button.scrollIntoView({ block: "nearest", behavior: "instant" }));
    }
  };

  return (
    <Section id="experience" title="Experience & Education">
      <p className="trace__hint">Bars are drawn to scale. Select a row to read more.</p>
      <div className="trace">
        <div className="trace__chart">
          <div className="trace__axis" aria-hidden="true">
            <span />
            <span className="trace__years">
              {axis.map((year, i) => (
                <span key={year} style={{ left: `${(i / years) * 100}%` }}>
                  {year}
                </span>
              ))}
            </span>
          </div>
          {lanes.map((lane) => (
            <div key={lane.label}>
              <h3 className="trace__lane">{lane.label}</h3>
              <ol>
                {lane.entries.map((entry) => (
                  <SpanRow
                    key={entry.title}
                    entry={entry}
                    lane={lane.label}
                    selected={entry.title === selected}
                    onSelect={select}
                  />
                ))}
              </ol>
            </div>
          ))}
        </div>
        <aside className="trace__panel" aria-live="polite">
          <motion.div
            key={panelEntry.title}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Details entry={panelEntry} />
          </motion.div>
        </aside>
      </div>
    </Section>
  );
}
