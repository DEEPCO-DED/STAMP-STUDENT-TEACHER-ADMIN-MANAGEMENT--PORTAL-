import { useState, useEffect } from "react";

export default function AdminFeeNotification() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [targetIds, setTargetIds] = useState(""); // ✅ NEW
  const [notifications, setNotifications] = useState([]);
  const [confirmations, setConfirmations] = useState({});

  // LOAD NOTIFICATIONS
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("feeNotifications")) || [];
    setNotifications(stored);
  }, []);

  // LOAD CONFIRMATIONS
  useEffect(() => {
    const map = {};

    for (let key in localStorage) {
      if (key.startsWith("feeConfirmation_")) {
        const data = JSON.parse(localStorage.getItem(key));
        if (!data) continue;

        if (!map[data.notificationId]) {
          map[data.notificationId] = [];
        }

        map[data.notificationId].push(data);
      }
    }

    setConfirmations(map);
  }, [notifications]);

  const sendNotification = () => {
    if (!title || !message) {
      alert("All fields required");
      return;
    }

    const targetStudents = targetIds
      ? targetIds.split(",").map((id) => id.trim())
      : [];

    const newNotice = {
      id: Date.now(),
      title,
      message,
      totalFee: 30000,
      date: new Date().toISOString().split("T")[0],
      readBy: [],
      targetStudents, // ✅ ADDED
    };

    const updated = [newNotice, ...notifications];

    localStorage.setItem(
      "feeNotifications",
      JSON.stringify(updated)
    );

    setNotifications(updated);
    setTitle("");
    setMessage("");
    setTargetIds(""); // ✅ CLEAR AFTER SEND
  };

  const deleteNotification = (id) => {
    if (!window.confirm("Delete this fee notification?")) return;

    const updated = notifications.filter(
      (n) => n.id !== id
    );

    localStorage.setItem(
      "feeNotifications",
      JSON.stringify(updated)
    );
    setNotifications(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fee Notifications</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />

      <br /><br />

      {/* ✅ NEW TARGET STUDENTS INPUT */}
      <input
        placeholder="Student IDs (comma separated). Leave empty for ALL"
        value={targetIds}
        onChange={(e) => setTargetIds(e.target.value)}
        style={{ width: "100%", padding: "6px" }}
      />

      <br /><br />

      <button onClick={sendNotification}>
        Send Notification
      </button>

      <hr />

      {notifications.length === 0 ? (
        <p>No fee notifications sent</p>
      ) : (
        notifications.map((n) => (
          <div
            key={n.id}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "6px",
            }}
          >
            <h4>{n.title}</h4>
            <p>{n.message}</p>
            <p><b>Total Fee:</b> ₹{n.totalFee}</p>
            <small>{n.date}</small>

            <br />

            <button
              style={{
                marginTop: "6px",
                background: "#e11d48",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => deleteNotification(n.id)}
            >
              Delete
            </button>

            {/* CONFIRMATIONS SECTION */}
            <div
              style={{
                marginTop: "12px",
                background: "#f8fafc",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              <h5>Student Confirmations</h5>

              {!confirmations[n.id] ||
              confirmations[n.id].length === 0 ? (
                <p style={{ fontSize: "14px" }}>
                  No confirmations yet
                </p>
              ) : (
                confirmations[n.id].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      borderBottom: "1px solid #ddd",
                      padding: "6px 0",
                    }}
                  >
                    <p><b>Student ID:</b> {c.studentId}</p>
                    <p><b>Status:</b> {c.status}</p>
                    <p><b>Message:</b> {c.response || "—"}</p>
                    <small>Confirmed on {c.confirmedAt}</small>
                  </div>
                ))
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
