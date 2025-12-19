import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const universalEmail = "dpkome@gmail.com";

  const passwords = {
    admin: "admin123",
    student: "student123",
    superadmin: "super123",

  };

  const handleLogin = () => {
    if (!role) {
      alert("Please select a portal");
      return;
    }

    /* ================= ADMIN / SUPERADMIN ================= */
    if (role === "admin" || role === "superadmin") {
      if (email.trim().toLowerCase() !== universalEmail.toLowerCase()) {
        alert("Invalid Email");
        return;
      }

      if (password !== passwords[role]) {
        alert("Wrong password for this portal");
        return;
      }

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          id: role,
          name: role.toUpperCase(),
          role,
        })
      );

      navigate(`/${role}`);
      return;
    }

    /* ================= TEACHER LOGIN ================= */
    if (role === "teacher") {
      const teachers = JSON.parse(localStorage.getItem("teachers")) || [];

      const teacher = teachers.find(
        (t) => t.email === email && t.password === password
      );

      if (!teacher) {
        alert("Teacher not found. Please contact admin.");
        return;
      }

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          id: teacher.id,
          name: teacher.name,
          email: teacher.email,
          role: "teacher",
        })
      );

      navigate("/teacher");
      return;
    }

    /* ================= STUDENT LOGIN (FIXED) ================= */
    if (role === "student") {
      const classes = JSON.parse(localStorage.getItem("classes")) || [];

      let foundStudent = null;
      let studentClass = null;

      for (let cls of classes) {
        const student = cls.students.find(
          (s) =>
            s.email === email &&
            password === passwords.student
        );

        if (student) {
          foundStudent = student;
          studentClass = cls;
          break;
        }
      }

      if (!foundStudent) {
        alert("Student not found or wrong credentials");
        return;
      }

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
      id: foundStudent.studentId,
  // ✅ UNIQUE ID
          name: foundStudent.name,
          email: foundStudent.email,
          role: "student",
          classId: studentClass.classId,
          className: studentClass.className,
        })
      );

      navigate("/student");
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>

      <select
        className="login-input"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Portal</option>
        <option value="admin">Admin Portal</option>
        <option value="teacher">Teacher Portal</option>
        <option value="student">Student Portal</option>
        <option value="superadmin">Super Admin</option>
      </select>

      <input
        type="email"
        placeholder="Enter Your Email"
        className="login-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Your Password"
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};

export default Login;
