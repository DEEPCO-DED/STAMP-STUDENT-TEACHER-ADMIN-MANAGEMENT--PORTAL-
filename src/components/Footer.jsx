import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* LEFT */}
      <div className="footer-left">
        <h3>Academic Portal</h3>
        <p>
          A unified platform for administrators, teachers, and students
          to manage academic activities efficiently.
        </p>

        <div className="footer-links">
          <span>Home</span>
          <span>Login</span>
          <span>Student</span>
          <span>Teacher</span>
          <span>Admin</span>
        </div>

        <p className="footer-contact">
          📧 dpkome@portal.com <br />
          📞 +91 9886254942
        </p>

        <small>© 2025 Academic Portal</small>
      </div>

      {/* MIDDLE */}
      <div className="footer-middle">
        <h3>Support & Help</h3>
        <ul>
          <li>Help Center</li>
          <li>FAQs</li>
          <li>Report an Issue</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      {/* RIGHT STAMP */}
      {/* RIGHT STAMP */}
<div className="footer-right">
  <span className="stamp-text">STAMP</span>

  <p className="stamp-tagline">
    Empowering Digital Education
  </p>

  <p className="stamp-roles">
    For Students | Teachers | Admins
  </p>

  {/* SOCIAL ICONS */}
  <div className="stamp-socials">
    <i className="fab fa-facebook-f"></i>
    <i className="fab fa-instagram"></i>
    <i className="fab fa-linkedin-in"></i>
    <i className="fab fa-github"></i>
  </div>
</div>


    </footer>
  );
};

export default Footer;
