import { projects } from "../data/portfolio.js";
import { Reveal, Section } from "./shared.jsx";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.1} as="article" className="card project">
            <div className="project__image">
              <img src={project.image} alt={project.alt} loading="lazy" />
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className="project__stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <a href={project.source} target="_blank" rel="noreferrer" className="text-link">
              <i aria-hidden="true" className="fab fa-github" /> View source
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
