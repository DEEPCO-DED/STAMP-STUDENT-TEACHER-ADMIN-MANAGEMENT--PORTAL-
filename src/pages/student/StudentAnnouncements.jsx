import { useEffect, useState } from "react";

export default function StudentAnnouncements() {
  const student = JSON.parse(localStorage.getItem("loggedInUser"));
  const [announcements, setAnnouncements] = useState([]);

  // LOAD ANNOUNCEMENTS
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(stored);
  }, []);

  // MARK AS READ
  const markAsRead = (id) => {
    const updated = announcements.map((a) =>
      a.id === id
        ? {
            ...a,
            readBy: a.readBy.includes(student.id)
              ? a.readBy
              : [...a.readBy, student.id],
          }
        : a
    );

    localStorage.setItem(
      "announcements",
      JSON.stringify(updated)
    );
    setAnnouncements(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Announcements</h2>

      {announcements.length === 0 ? (
        <p>No announcements yet.</p>
      ) : (
        announcements.map((a) => {
          const isRead = a.readBy.includes(student.id);

          return (
            <div
              key={a.id}
              style={{
                border: "1px solid #ccc",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "6px",
                background: isRead ? "#f9f9f9" : "#ffffff",
              }}
            >
              <h4>{a.title}</h4>
              <p>{a.message}</p>

              <small>
                Posted by {a.postedByName} on {a.date}
              </small>

              <br />

              {!isRead && (
                <button
                  style={{
                    marginTop: "6px",
                    background: "#2563eb",
                    color: "#fff",
                    border: "none",
                    padding: "6px 10px",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  onClick={() => markAsRead(a.id)}
                >
                  Mark as Read
                </button>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
