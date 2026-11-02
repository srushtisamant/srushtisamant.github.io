import { profile } from "../data/portfolio.js";
import { Reveal, Section } from "./shared.jsx";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Reveal className="contact">
        <form action={`mailto:${profile.email}`} method="post" encType="text/plain" className="contact__form">
          <label>
            <span>Your email</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            <span>Your message</span>
            <textarea name="message" rows="5" placeholder="Hi Srushti," required />
          </label>
          <button type="submit" className="btn btn--primary">
            Send message
          </button>
        </form>
      </Reveal>
    </Section>
  );
}
