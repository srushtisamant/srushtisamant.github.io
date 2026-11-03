import { projects } from "../data/portfolio.js";
import { Reveal, Section } from "./shared.jsx";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ol className="projects">
        {projects.map((project, i) => (
          <Reveal key={project.name} as="li" className="project">
            <span className="project__number" aria-hidden="true">
              1.{i + 1}
            </span>
            <div className="project__body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="project__stack">{project.stack.join(" / ")}</p>
              <a href={project.source} target="_blank" rel="noreferrer" className="text-link">
                View source ↗
              </a>
            </div>
            <div className="project__image">
              <img src={project.image} alt={project.alt} loading="lazy" />
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
