import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
        <div class="container">
          <a className="navbar-brand fw-bold" href="#home">
            Kashif JanWali
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link" to="about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="education"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="skills">
                  Skills
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="projects">
                  Projects
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="cv">
                  My CV
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact-me">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
