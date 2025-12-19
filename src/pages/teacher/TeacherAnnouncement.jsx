import { useState, useEffect } from "react";

export default function TeacherAnnouncement() {
  const teacher = JSON.parse(localStorage.getItem("loggedInUser"));

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  // LOAD ANNOUNCEMENTS
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(stored);
  }, []);

  // POST ANNOUNCEMENT
  const postAnnouncement = () => {
    if (!title.trim() || !message.trim()) {
      alert("All fields required");
      return;
    }

    const newAnnouncement = {
      id: Date.now(),
      title: title.trim(),
      message: message.trim(),
      postedByName: teacher.name,
      postedByRole: "teacher",
      date: new Date().toISOString().split("T")[0],
      readBy: [],
    };

    const updated = [newAnnouncement, ...announcements];
    localStorage.setItem("announcements", JSON.stringify(updated));
    setAnnouncements(updated);

    setTitle("");
    setMessage("");
  };

  // 🗑 DELETE ANNOUNCEMENT
  const deleteAnnouncement = (id) => {
    if (!window.confirm("Delete this announcement?")) return;

    const updated = announcements.filter(
      (a) => a.id !== id
    );

    localStorage.setItem(
      "announcements",
      JSON.stringify(updated)
    );
    setAnnouncements(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Teacher Announcements</h2>

      {/* CREATE */}
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

      <button onClick={postAnnouncement}>Post</button>

      <hr />

      {/* LIST */}
      {announcements.length === 0 ? (
        <p>No announcements yet</p>
      ) : (
        announcements.map((a) => (
          <div
            key={a.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
            }}
          >
            <h4>{a.title}</h4>
            <p>{a.message}</p>
            <small>{a.date}</small>

            <br />

            <button
              style={{
                marginTop: "6px",
                background: "#e11d48",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
              onClick={() => deleteAnnouncement(a.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
