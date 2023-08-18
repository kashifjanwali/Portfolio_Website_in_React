import profile from "../images/Kashf-Hussain.jpg";
export default function About() {
  return (
    <>
      <section id="about" class="bg-light py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img
                src={profile}
                class="img-fluid rounded-circle"
                alt="Profile"
              ></img>
            </div>
            <div class="col-md-6">
              <h2 class="display-4 fw-bold">About Me</h2>
              <p class="lead">
                Hi, I’m <strong>Kashif Hussain </strong>
                <em>(@kashifjanwali)</em>, a Full Stack Web Developer based in
                Rawalpindi, Pakistan. I create beautiful and functional websites
                that help businesses, organisations and persons grow online. I’m
                passionate about coding, design, and learning new technologies.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
