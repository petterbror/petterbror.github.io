import { title } from '../data/title';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header-inner">
        <span className="header-name">{title.title}</span>
        <nav className="header-nav">
          <a href="#contact">[ Contact ]</a>
        </nav>
      </div>
    </header>
  );
};
