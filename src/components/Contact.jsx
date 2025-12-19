import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">

        {/* TEXT SECTION */}
        <div className="contact-text">
          <h2>Contact Us</h2>

          <p>
            Have questions, need a demo, or want to learn more about
            <strong className="stamp-highlight"> STAMP </strong>
            (Student Teacher Admin Management Portal)?
            We’re here to help.
          </p>

          <p>
            Whether you are an administrator, teacher, or institution,
            feel free to reach out to us for support, inquiries, or a live
            demonstration of the platform.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> dpkome@gmail.com</p>
            <p><strong>Phone:</strong> +91 9886254942</p>
            <p><strong>Location:</strong> India</p>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          
          <select>
            <option>Select Your Role</option>
            <option>Admin</option>
            <option>Teacher</option>
            <option>Student</option>
            <option>Institution</option>
          </select>

          <textarea placeholder="Your Message" rows="4"></textarea>

          <button>Send Message</button>
        </div>

      </div>
    </div>
  );
}

export default Contact;
