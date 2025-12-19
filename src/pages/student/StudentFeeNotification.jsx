import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentFeeNotification() {
  const student = JSON.parse(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([]);
  const [responses, setResponses] = useState({});

  // LOAD FEE NOTIFICATIONS
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("feeNotifications")) || [];
    setNotifications(stored);
  }, []);

  // MARK AS READ
  const markAsRead = (id) => {
    const updated = notifications.map((n) =>
      n.id === id
        ? {
            ...n,
            readBy: n.readBy.includes(student.id)
              ? n.readBy
              : [...n.readBy, student.id],
          }
        : n
    );

    localStorage.setItem(
      "feeNotifications",
      JSON.stringify(updated)
    );
    setNotifications(updated);
  };

  // SEND CONFIRMATION TO ADMIN
  const sendConfirmation = (notificationId) => {
    const key = `feeConfirmation_${notificationId}_${student.id}`;

    if (localStorage.getItem(key)) return;

    const data = {
      notificationId,
      studentId: student.id,
      status: "Confirmed",
      response: responses[notificationId] || "",
      confirmedAt: new Date().toLocaleString(),
    };

    localStorage.setItem(key, JSON.stringify(data));
    alert("Confirmation sent to admin");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fee Notifications</h2>

      {notifications.length === 0 ? (
        <p>No fee notifications yet.</p>
      ) : (
        notifications.map((n) => {
          const isRead = n.readBy.includes(student.id);
          const confirmKey = `feeConfirmation_${n.id}_${student.id}`;
          const isConfirmed = localStorage.getItem(confirmKey);

          return (
            <div
              key={n.id}
              style={{
                border: "1px solid #ccc",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "6px",
                background: isRead ? "#f9f9f9" : "#ffffff",
              }}
            >
              <h4>{n.title}</h4>
              <p>{n.message}</p>

              <p>
                <b>Total Fee:</b> ₹{n.totalFee}
              </p>

              <small>Posted on {n.date}</small>
              <br />

              {!isRead && (
                <button
                  style={{
                    marginTop: "8px",
                    background: "#2563eb",
                    color: "#fff",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => markAsRead(n.id)}
                >
                  Mark as Read
                </button>
              )}

              {/* CONFIRMATION SECTION */}
              {isConfirmed ? (
                <p style={{ color: "#16a34a", marginTop: "8px" }}>
                  ✔ Confirmation sent to admin
                </p>
              ) : (
                <>
                  <textarea
                    placeholder="Optional message to admin"
                    value={responses[n.id] || ""}
                    onChange={(e) =>
                      setResponses({
                        ...responses,
                        [n.id]: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      marginTop: "8px",
                      padding: "6px",
                    }}
                  />

                  <button
                    style={{
                      marginTop: "8px",
                      background: "#16a34a",
                      color: "#fff",
                      border: "none",
                      padding: "6px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => sendConfirmation(n.id)}
                  >
                    Confirm to Admin
                  </button>
                </>
              )}

              {/* KEEP THIS BUTTON AS-IS */}
              <button
                style={{
                  marginTop: "8px",
                  marginLeft: "10px",
                  background: "#0f766e",
                  color: "#fff",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/student/fees")}
              >
                Proceed to Fee Payment
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
