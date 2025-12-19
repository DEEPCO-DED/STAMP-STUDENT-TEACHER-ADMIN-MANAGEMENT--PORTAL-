import { useEffect, useState } from "react";

export default function AttendanceAdmin() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/adminAttendance")
      .then(res => res.json())
      .then(data => setRecords(data));
  }, []);

  return (
    <div>
      <h2>Forwarded Attendance (Admin)</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Student</th>
            <th>Date</th>
            <th>Batch</th>
            <th>Tutor</th>
            <th>Status</th>
            <th>Remark</th>
            <th>Forwarded On</th>
          </tr>
        </thead>

        <tbody>
          {records.map(r => (
            <tr key={r.id}>
              <td>{r.studentName}</td>
              <td>{r.date}</td>
              <td>{r.batch}</td>
              <td>{r.tutor}</td>
              <td>{r.status}</td>
              <td>{r.remark || "-"}</td>
              <td>{new Date(r.forwardedOn).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
