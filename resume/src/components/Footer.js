const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <nav>
            <ol class="footer-links">
              <li class="footer-link">
                <a
                  title="GitHub"
                  href="https://github.com/devsyedmohsin"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    src="assets/images/social-links/github.svg"
                    alt="GitHub"
                  />
                </a>
              </li>
              <li class="footer-link">
                <a
                  title="Codepen"
                  href="https://github.com/devsyedmohsin"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    src="assets/images/social-links/codepen.svg"
                    alt="Codepen"
                  />
                </a>
              </li>
              <li class="footer-link">
                <a
                  title="Linkedin"
                  href="https://www.linkedin.com/in/syed-mohisn-raza-393177262/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    src="assets/images/social-links/linkedin.svg"
                    alt="Linkedin"
                  />
                </a>
              </li>
              <li class="footer-link">
                <a
                  title="Twitter"
                  href="https://github.com/devsyedmohsin"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    src="assets/images/social-links/twitter.svg"
                    alt="Twitter"
                  />
                </a>
              </li>
            </ol>
          </nav>
          <p class="footer-text">
            &copy; 2024 - Template designed & developed by{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/devsyedmohsin"
            >
              Syed Mohsin.
            </a>
          </p>
          <label class="theme-switch" for="theme-switch">
            <span>Dark Theme</span>
            <input type="checkbox" id="theme-switch" role="switch" />
          </label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
