// export default function Footer() {
//     return (
//         <footer className="fixed-bottom text-center bg-dark text-light">
//         <h4 className="my-3">Footer</h4>
//         </footer>
//     );
//     }
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer fixed-bottom text-center bg-dark text-light">
      <div className="container">
        <div className="footer-icons">
          <a href="https://github.com/example">
            <FaGithub className="icon" />
          </a>
          <a href="https://linkedin.com/in/example">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://twitter.com/example">
            <FaTwitter className="icon" />
          </a>
        </div>
        <p className="footer-text">© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
