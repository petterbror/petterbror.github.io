import type { ContactInfo } from '../types';
import { contactSubtitle, contactTitle } from '../data/contact';

interface ContactProps {
  contactInfo: ContactInfo;
}

export const Contact = ({ contactInfo }: ContactProps) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{contactTitle}</h2>
        <p className="section-subtitle">{contactSubtitle}</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
