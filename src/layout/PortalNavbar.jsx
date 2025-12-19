import { useNavigate } from "react-router-dom";
import "./PortalNavbar.css";

export default function PortalNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear ONLY logged-in user info
    localStorage.removeItem("loggedInUser");

    navigate("/login");
  };

  return (
    <div className="portal-navbar">
      <div className="portal-logo">STAMP</div>
      <button className="portal-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
