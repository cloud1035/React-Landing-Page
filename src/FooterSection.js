export default function FooterSection() {
  return (
    <div className="footer-section" id="subscribe">
      <div>
        <h1>subscribe to our email list</h1>
      </div>
      <div>
        <form action="https://submit-form.com/teHSLhGn">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="What's your email?"
            required=""
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
