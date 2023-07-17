export default function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-sm justify-content-center">
      <div className="container-fluid d-flex justify-content-center">
          <button
            className="navbar-toggler mb-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={
                  currentPage === 'About' ? 'nav-link active' : 'nav-link'
                }>
                About me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={
                  currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
                }>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={
                  currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
                }>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={
                  currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
                }>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
