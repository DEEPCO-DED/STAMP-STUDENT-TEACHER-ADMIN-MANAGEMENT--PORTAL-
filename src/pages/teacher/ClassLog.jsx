import { useEffect, useState } from "react";

export default function ClassLog() {
  const [logs, setLogs] = useState([]);

  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [remarks, setRemarks] = useState("");

  // READ: Fetch class logs from JSON Server
  useEffect(() => {
    fetch("http://localhost:5000/classLogs")
      .then((res) => res.json())
      .then((data) => setLogs(data))
      .catch((err) => console.error("Error fetching logs:", err));
  }, []);

  // CREATE: Add new class log
  const handleAddLog = (e) => {
    e.preventDefault();

    if (!date || !subject || !topic || !remarks) {
      alert("All fields are required");
      return;
    }

    const newLog = {
      date,
      subject,
      topic,
      remarks
    };

    fetch("http://localhost:5000/classLogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLog)
    })
      .then((res) => res.json())
      .then((savedLog) => {
        setLogs([...logs, savedLog]);

        // Clear form
        setDate("");
        setSubject("");
        setTopic("");
        setRemarks("");
      })
      .catch((err) => console.error("Error saving log:", err));
  };

  // 🗑 DELETE: Remove class log
  const handleDeleteLog = (id) => {
    if (!window.confirm("Delete this class log?")) return;

    fetch(`http://localhost:5000/classLogs/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setLogs(logs.filter((log) => log.id !== id));
      })
      .catch((err) =>
        console.error("Error deleting log:", err)
      );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Teacher Class Log</h2>

      {/* ADD LOG FORM */}
      <form onSubmit={handleAddLog} style={{ marginBottom: "20px" }}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Topic Covered"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Remarks"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />
        <br /><br />

        <button type="submit">Add Log</button>
      </form>

      <hr />

      {/* SAVED LOGS */}
      <h3>Saved Class Logs</h3>

      {logs.length === 0 && <p>No logs added yet</p>}

      {logs.map((log) => (
        <div
          key={log.id}
          style={{
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px"
          }}
        >
          <strong>Date:</strong> {log.date} <br />
          <strong>Subject:</strong> {log.subject} <br />
          <strong>Topic:</strong> {log.topic} <br />
          <strong>Remarks:</strong> {log.remarks}

          <br /><br />

          {/* 🗑 DELETE BUTTON */}
          <button
            style={{
              background: "#e11d48",
              color: "#fff",
              border: "none",
              padding: "6px 10px",
              cursor: "pointer",
              borderRadius: "4px"
            }}
            onClick={() => handleDeleteLog(log.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
