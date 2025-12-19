import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const loggedStudent = JSON.parse(
      localStorage.getItem("loggedInUser")
    );

    if (!loggedStudent) {
      alert("Please login as student");
      navigate("/login");
      return;
    }

    setStudent(loggedStudent);
  }, [navigate]);

  if (!student) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Dashboard</h2>

      <p><b>Name:</b> {student.name}</p>
      <p><b>Email:</b> {student.email}</p>
      <p><b>Class:</b> {student.className}</p>
    </div>
  );
}
