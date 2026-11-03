import { motion } from "framer-motion";
import { profile } from "../data/portfolio.js";

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const [firstName, lastName] = profile.name.split(" ");

  return (
    <motion.section
      id="about"
      className="section hero"
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="hero__top">
        <div>
          <motion.p variants={item} className="hero__role">
            {profile.role}
          </motion.p>
          <motion.h1 variants={item} className="hero__name">
            {firstName}
            <br />
            <em>{lastName}</em>
          </motion.h1>
        </div>
        <motion.div
          className="hero__sticker"
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 4 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={profile.image} alt={profile.imageAlt} width="240" height="300" />
        </motion.div>
      </div>

      <motion.p variants={item} className="hero__headline">
        {profile.headline}
      </motion.p>

      <motion.div variants={item} className="hero__actions">
        <a href={profile.resume} target="_blank" rel="noreferrer" className="btn">
          Resume
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-link">
          GitHub ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link">
          LinkedIn ↗
        </a>
      </motion.div>

      <motion.dl variants={item} className="facts">
        {profile.facts.map((fact) => (
          <div key={fact.label} className="facts__item">
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </motion.dl>
    </motion.section>
  );
}
