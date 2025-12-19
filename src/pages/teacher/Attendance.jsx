import React, { useEffect, useState } from "react";

export default function TeacherAttendance() {
  const [attendanceList, setAttendanceList] = useState([]);

  const TEACHER_KEY = "attendance_all";

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem(TEACHER_KEY)) || [];
    setAttendanceList(saved);
  }, []);

  const updateAttendance = (id, approved) => {
    const updated = attendanceList.map((a) =>
      a.id === id
        ? { ...a, approved, markedBy: "teacher" }
        : a
    );

    setAttendanceList(updated);
    localStorage.setItem(TEACHER_KEY, JSON.stringify(updated));

    // Sync back to student storage
    updated.forEach((a) => {
      const studentKey = `attendance_student_${a.studentId}`;
      const studentData =
        JSON.parse(localStorage.getItem(studentKey)) || [];

      const synced = studentData.map((s) =>
        s.id === a.id ? a : s
      );

      localStorage.setItem(studentKey, JSON.stringify(synced));
    });
  };

  return (
    <div>
      <h2>Student Attendance</h2>

      <table border="1" cellPadding="8" width="100%">
        <thead>
          <tr>
            <th>Date</th>
            <th>Student</th>
            <th>Status</th>
            <th>Marked By</th>
            <th>Approval</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {attendanceList.length === 0 ? (
            <tr>
              <td colSpan="6" align="center">
                No attendance records
              </td>
            </tr>
          ) : (
            attendanceList.map((a) => (
              <tr key={a.id}>
                <td>{a.date}</td>
                <td>{a.studentName}</td>
                <td>{a.status}</td>
                <td>{a.markedBy}</td>
                <td>
                  {a.approved ? (
                    <span style={{ color: "green" }}>
                      Approved
                    </span>
                  ) : (
                    <span style={{ color: "orange" }}>
                      Pending
                    </span>
                  )}
                </td>
                <td>
                  {!a.approved && (
                    <>
                      <button
                        onClick={() => updateAttendance(a.id, true)}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateAttendance(a.id, false)}
                        style={{ marginLeft: "5px" }}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
