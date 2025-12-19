import { useEffect, useState } from "react";
import "./DemoRequests.css";

const DemoRequests = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    date: ""
  });

  const [success, setSuccess] = useState(false);

  /* ================= FORM HANDLING ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.organization || !form.date) {
      alert("All fields are required");
      return;
    }

    await fetch("http://localhost:5000/demoRequests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        status: "Pending",
        createdAt: new Date().toISOString()
      })
    });

    setSuccess(true);
    setForm({ name: "", email: "", organization: "", date: "" });

    // Auto-hide success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  /* ================= UI ================= */
  return (
    <div className="demo-list-container">

      <div className="demo-form-card">
        <h2>Book a Demo</h2>
        <p>Schedule a personalized walkthrough of our platform</p>

        {success && (
          <div className="success-msg">
            ✅ Demo request submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="organization"
            placeholder="School / College / Organization"
            value={form.organization}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <button type="submit" className="btn submit">
            Request Demo
          </button>
        </form>
      </div>

    </div>
  );
};

export default DemoRequests;
