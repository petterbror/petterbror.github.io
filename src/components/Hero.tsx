import { heroInfo } from '../data/hero';
import { contactInfo } from '../data/contact';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <p className="label">01 / Profile</p>
        <h1 className="hero-title">{heroInfo.title}</h1>
        <p className="hero-subtitle">{heroInfo.subtitle}</p>
        <p className="hero-description">{heroInfo.description}</p>

        <dl className="spec">
          <div className="spec-row">
            <dt>Name</dt>
            <dd>{heroInfo.title}</dd>
          </div>
          <div className="spec-row">
            <dt>Role</dt>
            <dd>{heroInfo.subtitle}</dd>
          </div>
          <div className="spec-row">
            <dt>Field</dt>
            <dd>Identity &amp; access management</dd>
          </div>
          <div className="spec-row">
            <dt>Contact</dt>
            <dd><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
