import { certifications } from "../data/portfolio.js";
import { Reveal, Section } from "./shared.jsx";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="certs">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} as="li" delay={(i % 2) * 0.1} className="card cert">
            <i aria-hidden="true" className="fas fa-certificate" />
            <div>
              <h3>{cert.name}</h3>
              <p>Microsoft · {cert.issued}</p>
              <p>Credential ID: {cert.id}</p>
              <a href={cert.url} target="_blank" rel="noreferrer" className="text-link">
                Show credential <i aria-hidden="true" className="fas fa-arrow-up-right-from-square" />
              </a>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
