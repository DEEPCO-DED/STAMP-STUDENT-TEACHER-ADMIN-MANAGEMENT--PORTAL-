import { useNavigate } from "react-router-dom";
import "./PortalNavbar.css";

export default function PortalNavbar({ onToggle }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="portal-navbar">
      <div className="navbar-left">
        {/* HAMBURGER */} 
        <button className="hamburger" onClick={onToggle}>
          ☰
        </button>

        {/* BRAND */}
        <div className="portal-brand">
          <div className="portal-logo">STAMP</div>
          <div className="portal-subtitle">
            Student  Teacher  Admin Management Portal
          </div>
        </div>
      </div>

      <button className="portal-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
