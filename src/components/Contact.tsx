import type { ContactInfo } from '../types';
import { contactSubtitle, contactTitle } from '../data/contact';

interface ContactProps {
  contactInfo: ContactInfo;
}

export const Contact = ({ contactInfo }: ContactProps) => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="label">02 / {contactTitle}</p>
        <p className="section-subtitle">{contactSubtitle}</p>
        <a className="contact-link" href={`mailto:${contactInfo.email}`}>
          <span>{contactInfo.email}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};
