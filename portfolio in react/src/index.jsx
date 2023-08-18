import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";

// Bootstrap 5.3
import "bootstrap/dist/css/bootstrap.css";

// Navigation bar
import NavigationBar from "./Components/navigation";

// About
import About from "./Components/About";

// Education
import Education from "./Components/education";

// Skills
import Skills from "./Components/skills";

// Projects
import Projects from "./Components/projects";

// CV
import MyCv from "./Components/myCv";

// Contact Me
import Contact from "./Components/contact";

// Fouting Routing Pages
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// React Icons


function Home() {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/education" element={<Education />}></Route>

        <Route path="/skills" element={<Skills />}></Route>

        <Route path="/projects" element={<Projects />}></Route>

        <Route path="/cv" element={<MyCv />}></Route>

        <Route path="/contact-me" element={<Contact />}></Route>
      </Routes>

      <section class="home bg-success text-white text-center py-5">
        <div class="container" style={{height: 320}}>
          <div class="row">
            <div class="col-md-6 mx-auto">
              <h1 class="display-5 fw-bold">
                Hello, I'm a Junior Fullstack Developer
              </h1>
              <p class="lead">Passionate about creating web applications.</p>
              <Link to="contact-me" class="btn btn-dark btn-md mt-3">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <footer class="bg-dark text-center text-white">
          {/*  Grid container  */}
          <div class="container p-4 pb-0">
            {/*  Section: Social media  */}
            <section class="mb-4">
              {/*  Facebook  */}
              <a
                rel="noopener"
                class="btn btn-outline-light btn-floating m-1"
                href="https://www.facebook.com/kashifjanwali"
                role="button"
                target="_blank"
              >
                facebook
              </a>

              {/*  Twitter  */}
              <a
                rel="noopener"
                class="btn btn-outline-light btn-floating m-1"
                href="https://www.twitter.com/kashifjanwali"
                role="button"
                target="_blank"
              >
                twitter
              </a>

              {/*  Youtube  */}
              <a
                rel="noopener"
                class="btn btn-outline-light btn-floating m-1"
                href="https://www.youtube.com/@kjwcoding"
                role="button"
                target="_blank"
              >
                youtube
              </a>

              {/*  Instagram  */}
              <a
                rel="noopener"
                class="btn btn-outline-light btn-floating m-1"
                href="https://www.instagram.com/kashifjanwali"
                role="button"
                target="_blank"
              >
                instagram
              </a>

              {/*  Linkedin  */}
              <a
                rel="noopener"
                class="btn btn-outline-light btn-floating m-1"
                href="https://www.linkedin.com/in/kashifjanwali"
                role="button"
                target="_blank"
              >
                linkedin-in
              </a>

              {/*  Github  */}
              <a
                rel="noopener"
                class="btn btn-outline-light btn-floating m-1"
                href="https://www.github.com/kashifjanwali"
                role="button"
                target="_blank"
              >
                github
              </a>
            </section>
            {/*  Section: Social media  */}
          </div>
          <div class="text-center p-3 bg-dark">
            © 2023 Copyright:
            <a
              rel="noopener"
              class="text-white"
              href="https://www.linkedin.com/company/kjwcoding"
              target="_blank"
            >
              KJW Coding
            </a>
          </div>
        </footer>
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
