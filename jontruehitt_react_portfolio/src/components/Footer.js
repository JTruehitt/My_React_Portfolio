import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="fixed-bottom text-center bg-dark text-light">
      <div className="container d-flex flex-column align-items-center">
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
        <p className="footer-text text-center">© 2023 Jon Truehitt. All rights reserved.</p>
      </div>
    </div>
  );
}
