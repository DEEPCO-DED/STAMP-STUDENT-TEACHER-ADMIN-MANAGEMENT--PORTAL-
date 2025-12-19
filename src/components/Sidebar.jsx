import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ role }) {
  const location = useLocation();

  const menus = {
    student: [
      { name: "Dashboard", path: "/student" },
      { name: "Attendance", path: "/student/attendance" },
      { name: "Announcements", path: "/student/announcements" },
      { name: "Fees", path: "/student/fees-notifications" },
      { name: "Learning", path: "/student/learning" }
    ],

    teacher: [
      { name: "Dashboard", path: "/teacher" },
      { name: "Announcements", path: "/teacher/announcements" },
      { name: "Attendance", path: "/teacher/attendance" },
      { name: "Class Log", path: "/teacher/classlog" }
    ],

    admin: [
      { name: "Dashboard", path: "/admin" },
      { name: "Fees", path: "/admin/fees" },
      { name: "Reports", path: "/admin/reports" }
    ],
  };

  return (
    /* ❌ DO NOT use .sidebar here */
    <div className="sidebar-inner">
      <div className="sidebar-title">
        {/* optional title / logo */}
      </div>

      {menus[role].map((item, index) => (
        <div key={index} className="sidebar-item">
          <Link
            to={item.path}
            className={`sidebar-link ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
