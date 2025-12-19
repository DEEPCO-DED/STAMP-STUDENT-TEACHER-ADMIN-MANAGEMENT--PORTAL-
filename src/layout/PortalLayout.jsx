import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import PortalNavbar from "./PortalNavbar";
import Sidebar from "../components/Sidebar";
import "./PortalLayout.css";

const PortalLayout = ({ role }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const location = useLocation();

  // 🔹 THIS CONTROLS TABLET + MOBILE
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user || user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="portal-layout">
      {/* 🔹 PASS TO NAVBAR */}
      <PortalNavbar onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="portal-body">
        {/* 🔹 WRAPPER CONTROLS POSITION */}
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <Sidebar role={role} />
        </div>

        <main
          className="portal-content"
          onClick={() => {
            if (window.innerWidth <= 768) setSidebarOpen(false);
          }}
        >
          <Outlet key={location.pathname} />
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;
