import "./contacts.css";

function Contacts() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-intro">
          We'd love to hear from you! Visit us, call us, email us, or send a
          message. Your next cozy coffee moment is just around the corner.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>Purok 3, Bambang, Bulacan, Philippines, 3017</p>
          </div>

          <div className="contact-card">
            <h3>📞 Call Us</h3>
            <p>0942 472 0806</p>
            <p>Open Tuesday – Sunday, 2 PM – 10 PM</p>
          </div>

          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>fullhousecafeph@gmail.com</p>
          </div>
        </div>

        </div>
    </section>
  );
}

export default Contacts;
