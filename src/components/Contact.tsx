import type { ContactInfo } from '../types';
import { contactSubtitle, contactTitle } from '../data/contact';

interface ContactProps {
  contactInfo: ContactInfo;
}

export const Contact = ({ contactInfo }: ContactProps) => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{contactTitle}</h2>
          <p className="section-subtitle">{contactSubtitle}</p>
        </div>
        <a className="contact-link" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </div>
    </section>
  );
};
