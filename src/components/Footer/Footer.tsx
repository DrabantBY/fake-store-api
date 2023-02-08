import { ReactComponent as StepLogo } from '@assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer bg-dark py-1">
      <div className="container">
        <nav className="navbar navbar-text text-primary fw-bold fs-5">
          <a className="navbar-brand" href="https://itstep.by/" target="_blank" rel="noreferrer">
            <StepLogo height={40} fill="#0d6efd" />
          </a>
          <span>© 2023 made by Eugene</span>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
