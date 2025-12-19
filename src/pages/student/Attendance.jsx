import React, { useEffect, useState } from "react";

export default function StudentAttendance() {
  const student = JSON.parse(localStorage.getItem("loggedInUser"));
  const today = new Date().toISOString().split("T")[0];

  const [attendanceList, setAttendanceList] = useState([]);
  const [status, setStatus] = useState("Present");

  const studentKey = `attendance_student_${student.id}`;
  const teacherKey = "attendance_all";

  // LOAD ONLY THIS STUDENT'S ATTENDANCE
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem(studentKey)) || [];
    setAttendanceList(saved);
  }, [studentKey]);

  const handleSubmit = () => {
    // ❌ Prevent multiple submissions on same day
    const alreadyRequested = attendanceList.some(
      (a) => a.date === today
    );

    if (alreadyRequested) {
      alert("Attendance already submitted today");
      return;
    }

    const request = {
      id: Date.now(),
      date: today,
      studentId: student.id,
      studentName: student.name,
      status,
      markedBy: "student",
      approved: false,
    };

    /* ---------------- STUDENT STORAGE ---------------- */
    const updatedStudentAttendance = [
      ...attendanceList,
      request,
    ];

    setAttendanceList(updatedStudentAttendance);
    localStorage.setItem(
      studentKey,
      JSON.stringify(updatedStudentAttendance)
    );

    /* ---------------- TEACHER STORAGE ---------------- */
    const teacherAttendance =
      JSON.parse(localStorage.getItem(teacherKey)) || [];

    localStorage.setItem(
      teacherKey,
      JSON.stringify([...teacherAttendance, request])
    );

    alert("Attendance sent to teacher for approval");
  };

  return (
    <div>
      <h2>Mark Attendance</h2>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button onClick={handleSubmit}>Submit</button>

      <h3 style={{ marginTop: "20px" }}>My Attendance</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Marked By</th>
            <th>Approval</th>
          </tr>
        </thead>

        <tbody>
          {attendanceList.map((a) => (
            <tr key={a.id}>
              <td>{a.date}</td>
              <td>{a.status}</td>
              <td>{a.markedBy}</td>
              <td>{a.approved ? "Approved" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
