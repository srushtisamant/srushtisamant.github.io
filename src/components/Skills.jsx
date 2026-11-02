import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio.js";
import { Reveal, Section } from "./shared.jsx";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 0.1} className="card skills__group">
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <motion.li key={skill.name} whileHover={{ y: -2 }}>
                  {skill.img ? (
                    <img src={skill.img} alt="" loading="lazy" width="22" height="22" />
                  ) : (
                    <i aria-hidden="true" className={skill.icon} />
                  )}
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
