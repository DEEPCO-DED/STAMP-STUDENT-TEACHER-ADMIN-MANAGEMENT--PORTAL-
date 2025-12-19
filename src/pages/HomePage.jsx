import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">

      {/* ================= HERO SECTION ================= */}
      <div className="home-content">

        {/* LEFT */}
        <div className="left-section">
          <h2>Welcome to Our Platform!</h2>
          <p className="subtitle">
            This unified platform offers easy access to all administrative,
            educational, and HR services. Empowering students, teachers,
            and staff for a successful academic year.
          </p>
        </div>

        {/* RIGHT */}
        <div className="right-section">
          <h3>Join Us Today!</h3>

          <div className="auth-placeholder">
            <p>Ready to get started?</p>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
            <button className="register-button">Register</button>
          </div>
        </div>

      </div>

      {/* ================= SERVICES ================= */}
      <div className="services">

        <div className="service-section">
          <h1>One Platform. Multiple Roles.</h1>
          <p>
            This academic portal brings administrators, teachers, and students
            together in a single digital space. From managing courses and
            attendance to sharing resources and announcements, everything
            happens seamlessly.
          </p>
        </div>

        <div className="service-card">
          <h1>What This Portal Offers</h1>
          <ul>
            <li>Role-based access for Admin, Teacher & Student</li>
            <li>Course & class management</li>
            <li>Attendance tracking & reports</li>
            <li>Announcements & academic updates</li>
          </ul>
        </div>

      </div>

      {/* ================= PORTAL CARDS ================= */}
      <div className="Portal-section">

        <div className="Portal-heading">
          <h2>
            A centralized portal offering seamless access for students,
            faculty, and staff
          </h2>
        </div>

        <div className="Portal-row">

          {/* STUDENT CARD */}
          <div className="Our-Portal">
            <img
              src="/images/Gemini_Generated_Image_hxfzo4hxfzo4hxfz.png"
              alt="Student Portal"
              className="feature-image"
            />
            <div className="Our-Portal-Text">
              <span className="tag">STUDENTS</span>
              <h3>Easy access to learning and academic services</h3>
              <p>
                Students can access courses, attendance, assignments,
                and academic tools instantly.
              </p>
            </div>
          </div>

          {/* FACULTY CARD */}
          <div className="Our-Portal">
            <img
              src="/images/Gemini_Generated_Image_sx7geasx7geasx7g.png"
              alt="Faculty Portal"
              className="feature-image"
            />
            <div className="Our-Portal-Text">
              <span className="tag">FACULTY</span>
              <h3>Seamless teaching and management tools</h3>
              <p>
                Faculty members can manage classes, schedules,
                and academic insights efficiently.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= FEATURES GRID ================= */}
      <div className="features-section">

        <h2 className="features-heading">Student Dashboard Features</h2>

        <div className="features-grid">

          <div className="feature-box">
            <i className="fa-solid fa-list"></i>
            <h3>Dashboard Overview</h3>
            <p>Attendance, progress, and daily updates.</p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-chalkboard"></i>
            <h3>Learning Materials</h3>
            <p>Notes, recordings, assignments, and resources.</p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-cubes"></i>
            <h3>Attendance & Reports</h3>
            <p>Monthly summaries and downloadable reports.</p>
          </div>

          <div className="feature-box">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <h3>Fee & Payments</h3>
            <p>Fee status, invoices, and secure payments.</p>
          </div>

          <div className="feature-box-A">
            <i className="fa-solid fa-calendar-days"></i>
            <h3>Timetable</h3>
            <p>Daily and weekly class schedules.</p>
          </div>

          <div className="feature-box-A">
            <i className="fa-solid fa-headset"></i>
            <h3>Support & Helpdesk</h3>
            <p>Raise queries and track responses.</p>
          </div>

          <div className="feature-box-A">
            <i className="fa-solid fa-bullhorn"></i>
            <h3>Announcements</h3>
            <p>Important notices from faculty and admin.</p>
          </div>

          <div className="feature-box-A">
            <i className="fa-solid fa-user-gear"></i>
            <h3>Profile & Settings</h3>
            <p>Manage personal info and preferences.</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HomePage;
