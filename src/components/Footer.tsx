import { title } from '../data/title';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>&copy; {new Date().getFullYear()} {title.title}</span>
        <span>IAM</span>
      </div>
    </footer>
  );
};
