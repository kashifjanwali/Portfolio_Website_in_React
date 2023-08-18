// Calculator
import calculator from "../images/calcul.PNG";

// Login Page
import login_page from "../images/loginPage.PNG";

// Live Clock
import live_clock from "../images/liveClock.PNG";

// Famous Logos 
import famous_logos from "../images/logos.jpg";

export default function Projects() {
  return (
    <>
      <section id="projects" class="bg-light py-5">
        <div class="container">
          <h2 class="display-4 fw-bold text-center">Projects</h2>
          <p class="lead text-center">
            Following are the projects I have done using my{" "}
            <strong> Web Development Skills </strong>
          </p>
          <hr></hr>

          <div class="row">
            {/* Calculator  */}
            <div class="col-12 col-lg-6">
              <div class="card my-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={calculator}
                      class="img-fluid rounded-start"
                      alt="Calculator"
                    ></img>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Calculator</h5>
                      <p class="card-text">
                        Created a user-friendly calculator using HTML, CSS, and
                        JavaScript. Supports basic arithmetic operations,
                        decimal numbers, and keyboard input. Features a stylish
                        design and real-time updates for seamless usability.
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          Saylani Mass I.T Training
                        </small>
                      </p>
                      <a rel="noopener" href="https://github.com/kashifjanwali/OUT_OF_THE_BOX"
                                            class="btn btn-dark btn-md" target="_blank">Source Code</a>
                                        <a rel="noopener" href="https://youtu.be/SJecOyacQU8"
                                            class="btn btn-dark btn-md mx-3" target="_blank">Video Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Page  */}
            <div class="col-12 col-lg-6">
              <div class="card my-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={login_page}
                      class="img-fluid rounded-start"
                      alt="Calculator"
                    ></img>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Login Page</h5>
                      <p class="card-text">
                        introduce my login page masterpiece! Crafted using HTML,
                        CSS, Bootstrap 5.3, and JavaScript, this page boasts an
                        inviting logo, a user-friendly form, social login icons,
                        and a captivating gradient background. With a strong
                        focus on responsiveness, accessibility, and
                        interactivity, I've followed design tips to ensure a
                        seamless user experience
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          Air University (NAVTTC)
                        </small>
                      </p>

                      <a rel="noopener"
                                            href="https://github.com/kashifjanwali/OUT_OF_THE_BOX/commit/83ad3ac27eac3e2981992d77d83e253efc77fab3"
                                            class="btn btn-dark btn-md" target="_blank">Source Code</a>

                                        <a rel="noopener"
                                            href="https://www.linkedin.com/feed/update/urn:li:activity:7095330139705647104"
                                            class="btn btn-dark btn-md mx-3" target="_blank">Video Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Clock */}
            <div class="col-12 col-lg-6">
              <div class="card my-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={live_clock}
                      class="img-fluid rounded-start"
                      alt="Calculator"
                    ></img>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Live Clock</h5>
                      <p class="card-text">
                        I've created a live clock project utilizing HTML, CSS,
                        and JavaScript. This dynamic clock not only displays the
                        current time but also provides information about the
                        date, year, month, and day. It's a concise and
                        functional implementation that enhances user experience.
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          Air University (NAVTTC)
                        </small>
                      </p>

                      <a rel="noopener"
                                            href="https://github.com/kashifjanwali/NAVTTC/tree/main/Live%20Clock"
                                            class="btn btn-dark btn-md" target="_blank">Source Code</a>

                                        <a rel="noopener"
                                            href="https://www.linkedin.com/feed/update/urn:li:activity:7096764905218801664"
                                            target="_blank" class="btn btn-dark btn-md mx-3">Video Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logos */}
            <div class="col-12 col-lg-6">
              <div class="card my-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={famous_logos}
                      class="img-fluid rounded-start"
                      alt="Calculator"
                    ></img>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Famous Logos</h5>
                      <p class="card-text">
                        Proficiently employing HTML, CSS, and JavaScript, I've
                        artistically fashioned a collection that encompasses
                        Facebook, Instagram, LinkedIn, Microsoft, and the
                        dynamic logo for KJW Coding Company.
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          Self Assessment
                        </small>
                      </p>

                      <a rel="noopener"
                                            href="https://github.com/kashifjanwali/OUT_OF_THE_BOX/commit/83ad3ac27eac3e2981992d77d83e253efc77fab3"
                                            class="btn btn-dark btn-md" target="_blank">Source Code</a>

                       <a rel="noopener"
                                            href="https://www.linkedin.com/feed/update/urn:li:activity:7095330139705647104"
                                            class="btn btn-dark btn-md mx-3" target="_blank">Video Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
