import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="stamp-footer">

      {/* ================= TOP GRID ================= */}
      <div className="footer-grid">

        {/* BRAND / ABOUT */}
        <div className="footer-col brand">
          <h2 className="brand-title">STAMP</h2>
          <p className="brand-desc">
            STAMP (Student Teacher Admin Management Portal) is a unified
            academic platform designed to simplify institutional workflows
            and enhance digital learning experiences.
          </p>

          <div className="brand-contact">
            <span> dpkome@gmail.com</span>
            <span>+91 98862 54942</span>
            <span>India</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/book-demo">Book a Demo</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* PORTALS */}
        <div className="footer-col">
          <h3>Portals</h3>
          <ul>
            <li>Student Portal</li>
            <li>Teacher Portal</li>
            <li>Admin Portal</li>
            <li>Dashboard</li>
            <li>Reports & Analytics</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h3>Support & Legal</h3>
          <ul>
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Report an Issue</li>
          </ul>
        </div>

      </div>

      {/* ================= DIVIDER ================= */}
      <div className="footer-divider"></div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="footer-bottom">

        <div className="bottom-left">
          <span>© 2025 STAMP. All rights reserved.</span>
        </div>

        <div className="bottom-center">
          <span className="tagline">
            Empowering Digital Education
          </span>
        </div>

        <div className="bottom-right">
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
