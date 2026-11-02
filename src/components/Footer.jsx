import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
