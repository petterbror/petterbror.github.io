import { heroInfo } from '../data/hero';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">{heroInfo.title}</h1>
        <p className="hero-subtitle">{heroInfo.subtitle}</p>
        <p className="hero-description">{heroInfo.description}</p>
      </div>
    </section>
  );
};
