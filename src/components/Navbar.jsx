import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <span className="logo-main">STAMP</span>
        </Link>
        <span className="logo-sub">
          Student Teacher Admin Management Portal
        </span>
      </div>

      {/* Desktop Right Section */}
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <button className="demo-btn">
          <Link to="/book-demo">Book a Demo</Link>
        </button>
      </div>

      {/* ================= HAMBURGER (MOBILE) ================= */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/book-demo" onClick={() => setMenuOpen(false)}>
          Book a Demo
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;
