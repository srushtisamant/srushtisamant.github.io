import { useState } from "react";
import { profile } from "../data/portfolio.js";
import { Reveal, Section } from "./shared.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Clipboard access can be blocked, so fall back to the visitor's email app
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section id="contact" title="Contact">
      <Reveal className="contact">
        <p className="contact__lead">Email is the best way to reach me.</p>
        <a href={`mailto:${profile.email}`} className="contact__email">
          {profile.email}
        </a>
        <div className="contact__actions">
          <button type="button" className="btn" onClick={copyEmail}>
            {copied ? "Copied" : "Copy email"}
          </button>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="text-link">
            Resume ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-link">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link">
            LinkedIn ↗
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
