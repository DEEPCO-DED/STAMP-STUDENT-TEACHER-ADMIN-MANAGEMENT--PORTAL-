import { Navigate, Outlet, useLocation } from "react-router-dom";
import PortalNavbar from "./PortalNavbar";
import Sidebar from "../components/Sidebar";
import "./PortalLayout.css";

const PortalLayout = ({ role }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const location = useLocation();

  if (!user || user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="portal-layout">
      <PortalNavbar />

      <div className="portal-body">
        <Sidebar role={role} />

        {/* 🔥 KEY FIX */}
        <main className="portal-content">
          <Outlet key={location.pathname} />
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;
