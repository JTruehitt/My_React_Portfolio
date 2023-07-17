import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer fixed-bottom text-center bg-dark text-light">
      <div className="container">
        <div className="footer-icons">
          <a href="https://github.com/JTruehitt">
            <FaGithub className="icon" />
          </a>
          <a href="https://linkedin.com/in/jonathantruehitt">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://twitter.com/jtruehitt18">
            <FaTwitter className="icon" />
          </a>
        </div>
        <p className="footer-text">© 2023 Jon Truehitt. All rights reserved.</p>
      </div>
    </footer>
  );
}
