import { skillGroups } from "../data/portfolio.js";
import { Reveal, Section } from "./shared.jsx";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skillGroups.map((group) => (
          <Reveal key={group.title} className="skills__group">
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
