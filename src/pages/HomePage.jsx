import React, { useEffect } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {

  // Force Bootstrap carousel to auto-start
  useEffect(() => {
    const carouselEl = document.getElementById(
      "carouselExampleSlidesOnly"
    );

    if (carouselEl && window.bootstrap) {
      new window.bootstrap.Carousel(carouselEl, {
        interval: 3000,
        ride: "carousel",
        pause: false,
        wrap: true,
      });
    }
  }, []);

  return (
    <div className="home-container">

      {/* ================= CAROUSEL ================= */}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="/images/smart academic.jpg"
              className="d-block w-100"
              alt="Smart Academic Management"
            />
            <div className="carousel-caption custom-caption">
              <h2>Smart Academic Management</h2>
              <p>All academic operations unified in one digital platform</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/images/powera.jpg"
              className="d-block w-100"
              alt="Powerful Admin Controls"
            />
            <div className="carousel-caption custom-caption">
              <h2>Powerful Admin Controls</h2>
              <p>Manage courses, staff, and operations with ease</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/images/empowering.jpg"
              className="d-block w-100"
              alt="Empowering Students and Faculty"
            />
            <div className="carousel-caption custom-caption">
              <h2>Empowering Students & Faculty</h2>
              <p>Seamless access to learning, attendance, and resources</p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="home-content">

        <div className="left-section">
          <h2>Welcome to Our Platform!</h2>
          <p className="subtitle">
            This unified platform offers seamless access to all administrative,
            educational, and HR services through a single, user-friendly
            interface.It simplifies day-to-day academic operations by bringing
            student management, attendance tracking,class logs,announcements,
            and fee management under one system.
          </p>
        </div>

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

      {/* ================= TRUST / VALUE SECTION ================= */}
      <div className="services">

        <div className="service-section">
          <h2>One Platform Multiple Roles!</h2>
          <p>
          This academic portal brings administrators,teachers,and students together within a single,secure digital ecosystem. It streamlines essential academic processes such as course management,attendance tracking,classlogs,and institutional communication.

From sharing </p>
        </div>

        <div className="service-card">
          <h1>What This Portal Offers</h1>
          <ul>
            <li>Role-based access for Admin, Teacher & Student</li>
            <li>Course & class management</li>
            <li>Attendance tracking & reports</li>
            <li>Announcements & academic updates</li>
            <li>Secure data handling & transparency</li>
          </ul>
        </div>

      </div>

      {/* ================= PORTAL CARDS ================= */}
      <div className="Portal-section">

        <div className="Portal-heading">
          <h2>
           A unified platform for students, faculty, and staff
          </h2>
        </div>

        <div className="Portal-row">

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
                schedules, and academic tools instantly.
              </p>
            </div>
          </div>

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
                Faculty members can manage classes, attendance,
                assessments, and academic insights efficiently.
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
