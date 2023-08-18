// HSSC Result
import hsscReault from "../images/hssc-result-kashif-hussain.jpg";

// SSC Result
import sscResult from "../images/ssc-result-kashif-hussain.jpg";

// Web and Mobile App Development (Saylani Mass I.T Training Program)
import smitWMA from "../images/smit.png";

// NAVTTC (Advance Web Application Development) - Air University Islamabad
import NAVTTC_AUI from "../images/aui.jpg";

export default function Education() {
  return (
    <>
      <section id="education" class="bg-light py-5">
        <div class="container">
          <h2 class="display-4 mb-5 text-center fw-bold">
            Education and Courses
          </h2>
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="card mb-4 bg-success text-white">
                <img
                  src={hsscReault}
                  class="card-img-top"
                  alt="HSSC"
                ></img>
                <div class="card-body">
                  <h3 class="card-title">
                    Intermediate in Computer Sciences (HSSC)
                  </h3>
                  <p class="card-text fs-5">
                    Cadet College, Sohawa{" "}
                    <span class="mx-4">
                      <em>Jul 2020 - Aug 2022</em>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <div class="card mb-4 bg-success text-white h-90">
                <img
                  src={sscResult}
                  class="card-img-top"
                  alt="HSSC"
                ></img>
                <div class="card-body">
                  <h3 class="card-title">Matriculation (SSC)</h3>
                  <p class="card-text fs-5">
                    Fauji Foundation Model School, Gilgit{" "}
                    <span class="mx-4">
                      <em>Jun 2018 - Jul 2020</em>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="card mb-4 bg-success text-white">
                <img
                  src={smitWMA}
                  class="card-img-top"
                  alt="HSSC"
                ></img>
                <div class="card-body">
                  <h3 class="card-title">Web and Mobile App Development</h3>
                  <p class="card-text fs-5">
                    Saylani Mass IT Training, Islamabad{" "}
                    <span class="mx-4">
                      <em>Jan 2023 - Jan 2024</em>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <div class="card mb-4 bg-success text-white h-90">
                <img
                  src={NAVTTC_AUI}
                  class="card-img-top"
                  alt="HSSC"
                ></img>
                <div class="card-body">
                  <h3 class="card-title">
                    Advance Web Application Development
                  </h3>
                  <p class="card-text fs-5">
                    Air University, Islamabad - NAVTTC
                    <span class="mx-4">
                      <em>Jun 2023 - sep 2023</em>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
