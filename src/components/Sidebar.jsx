import { Link } from "react-router-dom";

export default function Sidebar({ role }) {

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
    <div
      style={{
        width: "220px",
        background: "#f4f4f4",
        height: "100vh",
        borderRight: "1px solid #ddd",
        paddingTop: "20px",
      }}
    >
      {menus[role].map((item, index) => (
        <div
          key={index}
          style={{ margin: "12px 0", paddingLeft: "20px" }}
        >
          <Link to={item.path}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
