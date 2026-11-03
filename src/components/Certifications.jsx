import { certifications } from "../data/portfolio.js";
import { Reveal, Section } from "./shared.jsx";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <Reveal className="certs">
        <table>
          <caption>All issued by Microsoft</caption>
          <thead>
            <tr>
              <th scope="col">Certification</th>
              <th scope="col">Issued</th>
              <th scope="col">Credential ID</th>
              <th scope="col">Verify</th>
            </tr>
          </thead>
          <tbody>
            {certifications.map((cert) => (
              <tr key={cert.id} className="cert">
                <th scope="row">{cert.name}</th>
                <td>{cert.issued}</td>
                <td>{cert.id}</td>
                <td>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                    aria-label={`Show credential for ${cert.name}`}
                  >
                    Show credential ↗
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
