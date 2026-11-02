import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "../data/portfolio.js";

function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch (e) {
      // The theme still changes for this visit if storage is blocked
    }
    setTheme(next);
  };

  return [theme, toggle];
}

// Tracks which section is crossing the middle of the screen
function useActiveSection() {
  const [active, setActive] = useState(navItems[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

function NavLinks({ active, onSelect, underline }) {
  return navItems.map(({ id, label }) => (
    <li key={id}>
      <a
        href={`#${id}`}
        className={`nav__link${active === id ? " nav__link--active" : ""}`}
        aria-current={active === id ? "true" : undefined}
        onClick={onSelect && ((event) => onSelect(event, id))}
      >
        {label}
        {underline && active === id && (
          <motion.span layoutId="nav-underline" className="nav__underline" />
        )}
      </a>
    </li>
  ));
}

export default function Header() {
  const [theme, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();
  const pendingSection = useRef(null);

  // Removing the tapped link cancels its scroll, so close the menu first and scroll after
  const selectFromMenu = (event, id) => {
    event.preventDefault();
    pendingSection.current = id;
    setMenuOpen(false);
  };

  const scrollToPending = () => {
    const id = pendingSection.current;
    if (!id) return;
    pendingSection.current = null;
    document.getElementById(id)?.scrollIntoView();
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#about" className="header__logo" aria-label="Back to top">
          SS
        </a>

        <nav className="nav" aria-label="Main">
          <ul className="nav__list nav__list--desktop">
            <NavLinks active={active} underline />
          </ul>
          <button
            type="button"
            className="icon-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={toggleTheme}
          >
            <i aria-hidden="true" className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`} />
          </button>
          <button
            type="button"
            className="icon-btn nav__hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i aria-hidden="true" className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </nav>
      </div>

      <AnimatePresence onExitComplete={scrollToPending}>
        {menuOpen && (
          <motion.ul
            className="nav__list nav__list--mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <NavLinks active={active} onSelect={selectFromMenu} />
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
