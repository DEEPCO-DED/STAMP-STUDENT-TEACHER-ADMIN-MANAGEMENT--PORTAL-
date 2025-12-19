import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
       <Link to="/">
  <span className="logo-main">STAMP</span>
</Link>
        <span className="logo-sub">Student   Teacher   Admin Management Portal</span>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <ul className="nav-links">
          <li>   <Link to="/about">About</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
        </ul>

        <button className="demo-btn"><Link to="/book-demo">Book a Demo</Link></button>
      </div>
    </nav>
  );
}

export default Navbar;
