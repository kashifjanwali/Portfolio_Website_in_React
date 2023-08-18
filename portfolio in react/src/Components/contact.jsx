export default function Contact() {
  return (
    <>
      <section id="contact" class="bg-light py-5">
        <h2 class="display-4 fw-bold text-center">Contact Me</h2>
        <p class="lead text-center">
          If you have any <strong>query</strong> or <strong>suggestion</strong>,
          feel free to contact me
        </p>
        <hr></hr>
        <form class="container my-2 cm">
          {/* style="width: 50%; text-align: left;" */}
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            ></input>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message here...."
            ></textarea>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input bg-dark"
              id="check"
              checked
            ></input>
            <label class="form-check-label " for="check">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-dark">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
